import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Modal,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [familyMembers, setfamilyMembers] = useState([{ name: "", age: "" }]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [submitError, setsubmitError] = useState(false);

  const handleAddFamily = () => {
    setfamilyMembers([...familyMembers, { name: "", age: "" }]);
  };
  const handleDeleteMember = (idx) => {
    const list = [...familyMembers];
    list.splice(idx, 1);
    setfamilyMembers(list);
  };

  const handleNameChange = (e, idx) => {
    const { name, value } = e.target;
    const list = [...familyMembers];
    list[idx][name] = value;
    setfamilyMembers(list);
  };
  const handleAgeChange = (e, idx) => {
    const { name, value } = e.target;
    const list = [...familyMembers];
    list[idx][name] = value;
    setfamilyMembers(list);
    console.log(familyMembers);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = () => {
    if (phoneNumber) {
      try {
        const docRef = addDoc(collection(db, "RSVP"), {
          familyMembers,
          phoneNumber,
          email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setfamilyMembers([{ name: "", age: "" }]);
      setEmail("");
      setPhoneNumber("");
      handleShow();
    } else {
      setsubmitError(true);
      setTimeout(() => {
        setsubmitError(false);
      }, 3000);
    }
  };

  //MODAL

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      className="d-flex align-items-center"
      align="center"
      style={{
        background: "white",
        minHeight: "100vh",
        backgroundImage: 'url("ramadan-background.avif")',
      }}
    >
      <Form className="mx-auto form">
        <Col>
          <Form.Text
            style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
          >
            RSVP
          </Form.Text>
        </Col>
        <Col>
          <Form.Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
            You are invited to the family Iftar party
          </Form.Text>
        </Col>
        <Form.Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Date: March 30, 2024
        </Form.Text>
        <Col>
          <Form.Text style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Location: Jalalabad Bhaban, Astoria NY
          </Form.Text>
        </Col>
        <InputGroup className="mt-3">
          <InputGroup.Text id="basic-addon2">Phone Number</InputGroup.Text>
          <Form.Control
            placeholder=""
            name="phoneNumber"
            aria-label="Phone Number"
            aria-describedby="basic-addon2"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(e)}
            required
          />
        </InputGroup>
        <InputGroup className="mt-3">
          <Form.Control
            placeholder="abcd@abcd.com"
            name="email"
            aria-label="Email Address"
            aria-describedby="basic-addon2"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
        </InputGroup>
        <Form.Label style={{ fontWeight: "bolder" }} className="mt-3">
          Family Members
        </Form.Label>
        {familyMembers.map((member, idx) => (
          <Row key={idx} className="mt-2">
            <Col xs={5}>
              <Form.Control
                id="name"
                name="name"
                placeholder="Name"
                value={member.name}
                onChange={(e) => handleNameChange(e, idx)}
              />
            </Col>
            {/* <Col xs={4}>
              <Form.Control
              id="age"
              name="age"
              placeholder="Adult or Child?"
              value={member.age}
              onChange={(e) => handleAgeChange(e, idx)}
              />
            </Col> */}
            <Col xs={4}>
              <Form.Select
                id="age"
                name="age"
                placeholder="Adult or Child?"
                value={member.age}
                onChange={(e) => handleAgeChange(e, idx)}
              >
                <option></option>
                <option value="adult">Adult</option>
                <option value="child">Child</option>
              </Form.Select>
            </Col>
            {familyMembers.length > 1 && (
              <Col xs="auto">
                <Button
                  onClick={() => handleDeleteMember(idx)}
                  variant="danger"
                >
                  Delete
                </Button>
              </Col>
            )}
          </Row>
        ))}
        <Button variant="success" className="mt-3" onClick={handleAddFamily}>
          Add Family Members
        </Button>
        <Button className="mt-3 mx-3" onClick={handleSubmit}>
          Submit Your RSVP
        </Button>
        {submitError ? (
          <Alert className="mt-3" variant="danger">
            Please Enter a Valid Phone Number
          </Alert>
        ) : (
          ""
        )}
      </Form>
      <>
        {/* Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>RSVP Confirmed</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, your RSVP has been sent!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Container>
  );
}

export default App;
