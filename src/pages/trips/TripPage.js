import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import { axiosReq } from "../../api/axiosDefaults";
import TripListCreateForm from "./TripListCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import btnStyles from "../../styles/Button.module.css";

function TripPage({ message, filter = "" }) {
  const [editingTripName, setEditingTripName] = useState("");
  const [editingTripQuantity, setEditingTripQuantity] = useState("");


  const handleSaveEdit = async (tripId) => {
    try {
      await axiosReq.put(`/trips/${tripId}/`, {
        name: setEditingTripName,
        quantity: setEditingTripQuantity,
        buy:setEditingTripBuy,
      });
      setTrips((prevTrips) =>
        prevTrips.map((trip) => {
          if (trip.id === tripId) {
            return {
              ...trip,
              name: editingTripName,
              quantity: editingTripQuantity,
              buy:setEditingTripBuy,
            };
          }
          return trip;
        })
      );
      setEditingTripId(null);
      setEditingTripName("");
      setEditingTripQuantity("");
      setEditingTripBuy("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (tripId) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      try {
        await axiosReq.delete(`/trips/${tripId}/`);
        setTrips((prevTrips) => prevTrips.filter((trip) => trip.id !== tripId));
      } catch (err) {
        console.log(err);
      }
    }
  };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchLists();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser];

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8} xl={9}>
      <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search for Item"
          />
        </Form>

        <TripListCreateForm setTrips={setTrips} />

        {hasLoaded ? (
          <>
            {trips.length ? (
              <InfiniteScroll
                dataLength={trips.length}
                next={() => fetchMoreData(trips, setTrips)}
                hasMore={!!trips.next}
                loader={<Asset spinner />}
                scrollThreshold="100px"
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Quantity</th>                      
                      <th>Need to Buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trips.map((trip) => (
                      <tr key={trip.id}>
                        {editingTripId === trip.id ? (
                          <>
                            <td>
                              <Form.Control
                                value={editingTripName}
                                onChange={(e) => setEditingTripName(e.target.value)}
                              />
                            </td>
                            <td>
                              <Form.Control
                                value={editingTripQuantity}
                                onChange={(e) => setEditingTripQuantity(e.target.value)}
                                type="number"
                              />
                            </td>
                            <td>
                              <Form.Control
                                value={editingTripBuy}
                                onChange={(e) => setEditingTripBuy(e.target.value)}
                              />
                            </td>
                            <td>
                              <button className={`${btnStyles.Button} ${btnStyles.blue}`} onClick={() => handleSaveEdit(trip.id)}>
                                Update
                              </button>
                              <button className={`${btnStyles.Button} ${btnStyles.blue}`} onClick={handleCancelEdit}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{trip.name}</td>
                            <td>{trip.quantity}</td>
                            <td>{trip.buy}</td>
                            <td>
                              <MoreDropdown
                                handleEdit={() =>
                                  handleEdit(trip.id, trip.name, trip.quantity, trip.buy)
                                }
                                handleDelete={() => handleDelete(trip.id)}
                              />
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </InfiniteScroll>
            ) : (
              <Container>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );


export default TripPage;