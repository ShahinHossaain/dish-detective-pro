import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <div>
      <AutoplaySlider
        animation="fallAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        className=" h-screen"
      >
        <div className="text-white">
          <div className="flex justify-between items-center">
            <img
              src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/landing-slide-1-img-1.png"
              alt=""
              className="h-screen"
            />
            <p className="relative uppercase text-6xl">
              Dish <br /> detective <br /> Pro
            </p>
          </div>
        </div>
        <div
          data-src="https://thumbs.dreamstime.com/b/asian-food-background-various-cooking-ingredients-rustic-background-top-view-banner-concept-chinese-thai-66582124.jpg"
          className="text-white"
        >
          <p className="relative text-xl">
            <span className="font-serif text-7xl">Food</span> is not just about
            sustenance, <br /> it's a sensory experience that tantalizes our
            taste buds and <br /> ignites our sense of smell and texture
          </p>
        </div>

        <div
          data-src="https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg"
          className="text-white"
        >
          <p className="relative text-xl">
            <span className="text-7xl">Great</span> food is a symphony of
            flavors, <br /> where each ingredient plays <br /> a unique role in
            creating a harmonious and unforgettable taste.
          </p>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
