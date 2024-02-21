import React from "react";
import styles from "../../styles/AdventureImage.module.css";
import { Card } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";

const Adventure = (props) => {
  const {
    location,
    image,
    activity,
    personal_note,
    handleEdit,
    handleDelete
  } = props;

  return (
    <Card className={styles.AdventureImage}>
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-center flex-grow-1">
            {location && <Card.Title>{location}</Card.Title>}
          </div>
          <div>
            <MoreDropdown handleEdit={handleEdit} handleDelete={handleDelete} />
          </div>
        </div>
        {activity && <Card.Text>{activity}</Card.Text>}
        {personal_note && <Card.Text>{personal_note}</Card.Text>}
      </Card.Body>
      <Card.Img src={image} alt={location} />
    </Card>
  );
};

export default Adventure;