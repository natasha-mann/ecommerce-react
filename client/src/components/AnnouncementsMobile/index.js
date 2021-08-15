import { React, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./AnnouncementsMobile.css";

const announcements = [
  "10% OFF FOR STUDENTS",
  "BUY NOW, PAY LATER WITH KLARNA",
  "FREE DELIVERY AND RETURNS ON EVERYTHING!",
];

class AnnouncementsMobile extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3500,
      className: "slides",
      arrows: false,
      centerMode: true,
    };

    return (
      <div className="announcement-bar text-center">
        <Slider {...settings}>
          {announcements.map((announcement, i) => {
            return <div key={i}>{announcement}</div>;
          })}
        </Slider>
      </div>
    );
  }
}

export default AnnouncementsMobile;
