import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import pic from "../../assets/images/App1.jpeg";
import pic2 from "../../assets/images/App2.jpeg";
import pic3 from "../../assets/images/App3.jpeg";

const slideImages = [
  {
    src: pic,
    // caption: "Slide 1",
  },
  {
    src: pic2,
    // caption: "Slide 2",
  },
  {
    src: pic3,
    // caption: "Slide 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => {
          console.log(slideImage.src);
          return (
            <div className="each-slide" key={index}>
              <div
                className="each-slide-img"
                style={{ backgroundImage: `url(${slideImage.src})` }}
              >
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
