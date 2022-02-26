import React from "react";
import { Card, Form } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTumblr } from "react-icons/fa";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="container" id="contact">
      <div className="text-center">
        <h1
          style={{
            color: "#8a8a8a",
            fontFamily: "Bakbak One, cursive",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          CONTACT WITH ME
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <Card
            className="shadow p-3 mb-5 rounded"
            style={{ width: "23rem", backgroundColor: "#212428" }}
          >
            <Card.Img
              variant="top"
              src="assets/contact1.jpg"
              className="rounded-3 img-fluid"
              data-aos="zoom-in"
            />
            <Card.Body>
              <Card.Title style={{ marginLeft: "-15px" }}>
                Clinton Biswas
              </Card.Title>
              <Card.Text style={{ marginLeft: "-15px" }}>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </Card.Text>
              <br />
              <Card.Text style={{ marginLeft: "-15px" }}>
                <h5>Phone: +8801726288542</h5>
                <h5>Email: ponti.clinton@gmail.com</h5>
              </Card.Text>
            </Card.Body>
            <br />
            <h4
              style={{
                color: "#B7B190",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              FIND WITH ME
            </h4>
            <li style={{ listStyle: "none" }}>
              <a
                href="https://www.facebook.com/clinton3343/"
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "15px", marginBottom: "20px" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/ClintonBiswas4"
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "15px", marginBottom: "20px" }}
              >
                <FaTumblr />
              </a>
              <a
                href="https://www.linkedin.com/in/clinton-biswas-42620422a/"
                type="button"
                className="btn btn-secondary"
                style={{ marginBottom: "20px" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
          </Card>
        </div>
        <div className="col-lg-7 shadow-lg p-3 mb-5 rounded" style={{}}>
          <Form>
            <div className="grid-container">
              <div className="col-sm-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label
                    className="mb-3"
                    style={{
                      color: "#a0a8b3",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    YOUR NAME
                  </Form.Label>
                  <Form.Control
                    className="shadow-lg p-3 mb-4 rounded border border-3 rounded-pill"
                    required
                    type="text"
                    placeholder="Enter email"
                    style={{
                      backgroundColor: "#191B1E",
                      color: "white",
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-6">
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Label
                    className="mb-3"
                    style={{
                      color: "#a0a8b3",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "1px",
                      display: "block",
                      textAlign: "left",
                    }}
                  >
                    YOUR PHONE
                  </Form.Label>
                  <Form.Control
                    className="shadow-lg p-3 mb-4 rounded border border-3 rounded-pill"
                    type="text"
                    placeholder="Enter phone"
                    style={{
                      backgroundColor: "#191B1E",
                      color: "white",
                    }}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="mb-3"
                  style={{
                    color: "#a0a8b3",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  SUBJECT
                </Form.Label>
                <Form.Control
                  className="shadow-lg p-3 mb-4 rounded border border-3 rounded-pill"
                  type="text"
                  placeholder="Subject"
                  style={{
                    backgroundColor: "#191B1E",
                    color: "white",
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label
                  className="mb-3"
                  style={{
                    color: "#a0a8b3",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  YOUR EMAIL
                </Form.Label>
                <Form.Control
                  className="shadow-lg p-3 mb-4 rounded border border-3 rounded-pill"
                  type="email"
                  placeholder="Enter email"
                  style={{
                    backgroundColor: "#191B1E",
                    color: "white",
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12">
              <Form.Group className="mb-3" controlId="floatingTextarea2">
                <Form.Label
                  className="mb-3"
                  style={{
                    color: "#a0a8b3",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "1px",
                    display: "block",
                    textAlign: "left",
                  }}
                >
                  YOUR MESSAGE
                </Form.Label>

                <Form.Control
                  className="shadow-lg p-2 mb-4 rounded border border-3"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{
                    height: "100px",
                    backgroundColor: "#191B1E",
                    color: "white",
                  }}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12">
              <Form.Control
                className="shadow-lg p-2 mb-4 rounded border border-3"
                type="button"
                value="Send Message"
                style={{
                  backgroundColor: "#191B1E",
                  color: "white",
                  marginTop: "10px",
                }}
              ></Form.Control>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
