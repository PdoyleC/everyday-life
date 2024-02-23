import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import NoImagesUploaded from "../../assets/NoImagesUploaded.png";
import styles from "../../styles/Cards.module.css";
import AdventureCard from "../../components/AdventureCard";
import btnStyles from "../../styles/Button.module.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function AdventuresPage({ message, filter = "" }) {  
  const [adventure, setAdventure] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchAdventure = async () => {
      try {
        const { data: { results } } = await axiosReq.get(`/adventure/?${filter}&search=${query}`);
        setAdventure(prevData => ({ ...prevData, results: [...results] }));
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchAdventure();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

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
            placeholder="Search Adventure"
          />
        </Form>

        <Link to="/adventure/create">
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`}>
            Add an adventure
          </Button>
        </Link>

        {hasLoaded ? (
          <>
            {adventure.results.length ? (
              <InfiniteScroll
                dataLength={adventure.results.length}
                next={() => fetchMoreData(adventure, setAdventure)}
                hasMore={!!adventure.next}
                loader={<Asset spinner />}
              >
                <div className={styles.CardGrid}>
                  {adventure.results.map((adventure) => (
                    <AdventureCard key={adventure.id} adventure={adventure} />
                  ))}
                </div>
              </InfiniteScroll>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoImagesUploaded} message={message} />
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

export default AdventuresPage;