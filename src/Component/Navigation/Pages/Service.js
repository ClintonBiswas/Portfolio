import React, { useEffect } from "react";
import "./pages.css";
import {
  FaAngleDoubleRight,
  FaDatabase,
  FaDna,
  FaInternetExplorer,
  FaPython,
  FaReact,
  FaSistrix,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div id="service" className="text-center">
        <h1
          style={{
            color: "#8a8a8a",
            fontFamily: "Bakbak One, cursive",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          WHAT I DO
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaReact
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>

            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Front End Development
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaPython
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Back End Development
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaSistrix
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Digital Marketing
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaDatabase
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Database Design
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaInternetExplorer
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Internet Research
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="fade-up"
            style={{ backgroundColor: "#212428", color: "#DADADB" }}
          >
            <span className="text-center">
              <FaDna
                style={{ width: "60px", height: "60px", marginBottom: "10px" }}
              />
            </span>
            <div className="card-body">
              <h4
                className="card-title"
                style={{
                  color: "#8a8a8a",
                  fontFamily: "Bakbak One, cursive",
                  marginBottom: "20px",
                }}
              >
                Data Scraping
              </h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-danger">
                <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
