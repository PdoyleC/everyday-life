import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

// import Asset from "../../components/Asset";

import styles from "../../styles/ContactCreateForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";




const  ContactCreateForm = () => {
  const [errors, setErrors] = useState({});

  const [contactsData, setContactsData] = useState({
    name: "",
    email: "",
    subject:"",
    message: "",
  });

  const { name, email, subject, message } = contactsData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactsData({
      ...contactsData,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData();


    try {
      await axiosReq.post("/contacts/", contactsData);
      history.push("/ContactConfirPage");
    } catch (err) {
    //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

 
  return (    
    <Row classame={styles.Row}>
      
      <Col>
        <Container className={`${appStyles.Message} p-4 `}>
          <h1 className={styles.Header}>Contact Us</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Please enter your email address here."
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.email?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Subject *</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.subject?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group>
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="How can we help you?"
                value={message}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.message?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
            >
            Cancel
            </Button>
            <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Submit
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default ContactCreateForm;