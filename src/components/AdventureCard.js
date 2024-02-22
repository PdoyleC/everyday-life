import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import styles from "../styles/Cards.module.css"

function AdventureCard({ adventure }) {
    const history = useHistory();
  
    const handleClick = () => {
      history.push(`/adventure/${adventure.id}`);
    };
  
    return (
      <Card onClick={handleClick}>
        <div className={styles.CardImageContainer}> 
          <img
            src={adventure.image}
            alt={adventure.location}
            className={styles.CardImage} 
          />
        </div>
        <Card.Body>
          <Card.Title>{adventure.location}</Card.Title>
          <Card.Title>Activity: {adventure.activity}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
  
  export default AdventureCard;