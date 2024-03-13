import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";

function TripListCreateForm({ setTrips }) {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: "",
    quantity: "",
    buy: "Unknown",
  });

  const { name, quantity, buy } = postData;

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    const confirmed = window.confirm("Empty form?");
    if (confirmed) {
      setPostData({ name: "", quantity: "",buy: "", });
      setErrors({});
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("buy", buy);

    try {
      const { data } = await axiosReq.post("/trips/", formData);
      const newTrips = data ?? {};
      setTrips((prevTrips) => [newTrips, ...prevTrips]);
      setPostData({ name: "", quantity: "", buy:"" });
      setErrors({});
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        console.log(err.response.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Item</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={quantity}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.quantity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Buy</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="buy"
          value={buy}
          onChange={handleChange}
        >
        <option value="choose_one">Choose, Y or N</option>
        <option value="N">N</option>
        <option value="Y">Y</option>
        
        </Form.Control>
      </Form.Group>
      {errors?.buy?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}


      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Add item
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={handleCancel}
      >
        Cancel
      </Button>
    </div>
  );

  return (
    <Container className={`d-flex align-items-center justify-content-center ${appStyles.Content}`}>
      <Form onSubmit={handleSubmit} className="w-100">
        {textFields}
      </Form>
    </Container>
  );
}

export default TripListCreateForm;