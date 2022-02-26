import React, { useEffect } from "react";
import ReactRotatingText from "react-rotating-text";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaTumblr,
  FaDatabase,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../../../App.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div id="home" className="container">
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col-lg-6" style={{}}>
            <p
              className="h6"
              style={{
                marginTop: "120px",
                color: "#B7B190",
                letterSpacing: "3px",
                marginBottom: "50px",
              }}
            >
              WELCOME TO MY WORLD
            </p>
            <h1
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                letterSpacing: "4px",
                fontSize: "50px",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  color: "#FF014F",
                  fontWeight: "bold",
                  letterSpacing: "4px",
                  fontSize: "50px",
                }}
              >
                Clinton Biswas
              </span>
            </h1>
            <h1
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                letterSpacing: "2px",
                fontSize: "40px",
                marginTop: "30px",
              }}
            >
              a{" "}
              <span
                style={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                <ReactRotatingText
                  items={["Django Developer", "React Developer"]}
                />
              </span>
            </h1>
            <br />
            <div data-aos="fade-right">
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "30px",
                  paddingRight: "16%",
                  opacity: "0.9",
                  color: "#B0B9C7",
                }}
              >
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="zoom-in">
            <div
              className="shadow p-3 mb-5 rounded"
              style={{
                marginTop: "50px",
                backgroundColor: "#212428",

                borderBottom: "150px",
              }}
            >
              <img
                src="assets/name.png"
                alt=""
                className="img-fluid"
                style={{
                  verticalAlign: "middle",
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
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
          </div>
          <div className="col-lg-3" style={{}}>
            <h4
              style={{
                color: "#B7B190",
                fontSize: "18px",
                marginBottom: "20px",
              }}
            >
              BEST SKILL ON
            </h4>
            <li style={{ listStyle: "none" }}>
              <a
                href="#"
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "15px" }}
              >
                <FaPython />
              </a>
              <a
                href="#"
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: "15px" }}
              >
                <FaReact />
              </a>
              <a
                href="#"
                type="button"
                className="btn btn-secondary"
                style={{}}
              >
                <FaDatabase />
              </a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
