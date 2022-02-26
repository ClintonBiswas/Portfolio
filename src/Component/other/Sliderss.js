import React, { Component } from "react";
import Slider from "react-slick";
import "./../custom.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container" style={{}}>
        <h1 className="text-center textcu"> Testimonial</h1>
        <Slider {...settings}>
          <div className="customslides">
            <img
              className="rounded-circle image fluid"
              src="assets/b.png"
              alt="alider"
            />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <h4>John Doe</h4>
          </div>
          <div className="customslides">
            <img
              className="rounded-circle image fluid"
              src="assets/a.png"
              alt="alider"
            />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <h4>John Doe</h4>
          </div>
          <div className="customslides">
            <img
              className="rounded-circle image fluid"
              src="assets/c.png"
              alt="alider"
            />
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <h4>John Doe</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
