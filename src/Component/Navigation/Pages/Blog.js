import React, { useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import "./pages.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="blog" className="container">
      <div className="text-center">
        <h1
          style={{
            color: "#8a8a8a",
            fontFamily: "Bakbak One, cursive",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          MY Blog
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="zoom-in"
            style={{ backgroundColor: "#212428" }}
          >
            <img
              src="assets/blog1.jpg"
              className="card-img-top rounded-3 img-fluid"
              alt="blog1"
            />
            <span style={{ color: "white", marginTop: "12px" }}>
              <FaRegClock style={{ color: "white" }} />
              &nbsp;&nbsp;5 min read
            </span>
            <div className="card-body">
              <a href="#" style={{ textDecoration: "none" }}>
                <h5 className="card-title">
                  Media Queries in Times of @container
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded"
            data-aos="zoom-in"
            style={{ backgroundColor: "#212428" }}
          >
            <img
              src="assets/blog2.jpg"
              className="card-img-top rounded-3 img-fluid"
              alt="blog2"
            />
            <span style={{ color: "white", marginTop: "12px" }}>
              <FaRegClock style={{ color: "white" }} />
              &nbsp;&nbsp;5 min read
            </span>
            <div className="card-body">
              <a href="#" style={{ textDecoration: "none" }}>
                <h5 className="card-title">
                  Container Queries in Web Components
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-4">
          <div
            className="card shadow p-3 mb-5 rounded img-fluid"
            data-aos="zoom-in"
            style={{ backgroundColor: "#212428" }}
          >
            <img
              src="assets/blog3.jpg"
              className="card-img-top rounded-3"
              alt="blog2"
            />
            <span style={{ color: "white", marginTop: "12px" }}>
              <FaRegClock style={{ color: "white" }} />
              &nbsp;&nbsp;5 min read
            </span>
            <div className="card-body">
              <a href="#" style={{ textDecoration: "none" }}>
                <h5 className="card-title">The Layouts of Tomorrow</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
