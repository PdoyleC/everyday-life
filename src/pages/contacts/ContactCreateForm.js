import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import PopularProfiles from "../profiles/PopularProfiles";
import Row from "react-bootstrap/Row";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";

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
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setContactsData({
      ...contactsData,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      await axiosReq.post("/contacts/", contactsData);
      setShowModal(true);
    } catch (err) {
    //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  /* 
    Handle closing of modal
  */
  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
  };

  const contactfields = (
    <div className="text-left">
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
    </div>
  );

  /* 
    Returns contact form page
  */
  return (
    <Form onSubmit={handleSubmit}>
      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal} centered={true}>
          <Modal.Header closeButton>
            <Modal.Title>We have received your message.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          A member of staff will be in Contact soon!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
          <div
            className={`${appStyles.Content} ${appStyles.TextAlignCenter} d-flex flex-column justify-content-center`}
          >
            <h3>Contact us</h3>
            <div className={appStyles.Content}>{contactfields}</div>
          </div>
        </Col>
        <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
      </Row>
    </Form>
  );
};

export default ContactCreateForm;