import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="about">
      <Container>
        <div className="text-center">
          <h1
            style={{
              color: "#8a8a8a",
              fontFamily: "Bakbak One, cursive",
              marginTop: "180px",
            }}
          >
            WHO AM I
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5
              style={{
                marginTop: "100px",
                color: "#8a8a8a",
                fontFamily: "cursive",
                lineHeight: "1.6",
              }}
            >
              I am working as a full-stack Python & Javascript developer.I DON'T
              KNOW MAGIC BUT I DO HARD WORK HERE .All my skills are prove for my
              hard work and all my top rated regular clients are my Friends, and
              all my reviews is my Inspiration.I am Student of Computer science
              and I work 12 hours per day in online also fiverr.com,
              upwork.com.I expect long Term relationship. I can help you build
              industry-standard websites, web app deployment, Bug fixing of the
              existing sites, updating your existing sites, etc. If you need a
              complete professional application you can contact me.
            </h5>
          </div>
          <div className="col-lg-6" data-aos="zoom-in-up">
            <div
              className="shadow p-3 mb-5 rounded"
              style={{
                marginTop: "50px",
                height: "375px",
                marginLeft: "75px",
                backgroundColor: "#212428",
              }}
            >
              <img src="assets/abb.png" alt="Service" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
