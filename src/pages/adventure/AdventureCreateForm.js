import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/AdventureCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function AdventureCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    location: "",
    personal_note: "",
    image: "",
    activity: "Unknown",
  });
  const { location, personal_note, image, activity } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("location", location);
    formData.append("activity", activity);
    formData.append("personal_note", personal_note);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/adventure/", formData);
      history.push(`/adventure/${data.id}`);
    } catch (err) {
    //   console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Location *</Form.Label>
        <Form.Control
          type="text"
          name="location"
          placeholder="Please add a Location."
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Activity *</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="activity"
          value={activity}
          onChange={handleChange}
          >
          <option value="choose_one">Choose one</option>
          <option value="family">Family</option>
          <option value="hobbies">Hobbies </option>
          <option value="sport">Sport</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </Form.Control>
        </Form.Group>
        {errors?.activity?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
        {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Personal Note </Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          placeholder="Please add a note, for future reference, for yourself."
          rows={4}
          name="personal_note"
          value={personal_note}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
          
        </Col>
      </Row>
    </Form>
  );
}

export default AdventureCreateForm;