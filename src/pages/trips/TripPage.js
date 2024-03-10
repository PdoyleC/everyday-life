



function TripPage({ message, filter = "" }) {


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
}

export default TripPage;