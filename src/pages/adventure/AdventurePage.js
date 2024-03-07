import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Adventure from "./Adventure";
import { useHistory } from "react-router-dom";

function AdventurePage() {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchAdventure = async () => {
      try {
        const response = await axiosReq.get(`/adventure/${id}`);
        setAdventure(response.data);
      } catch (err) {
        // console.log(err);
      }
    };

    fetchAdventure();
  }, [id]);

  const handleEdit = () => {
    history.push(`/adventure/${id}/edit`);
  };

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this Adventure?");
    if (confirmed) {
      try {
        await axiosRes.delete(`/adventure/${id}`);
        history.goBack();
      } catch (err) {
        // console.log(err);
      }
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {adventure && (
            <Adventure
              {...adventure}
              AdventurePage={true}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default AdventurePage;