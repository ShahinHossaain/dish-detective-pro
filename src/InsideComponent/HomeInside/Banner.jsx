import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import LazyLoad from "react-lazy-load";
import { FaSearchengin } from "react-icons/fa";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <div className="font-serif">
      <AutoplaySlider
        animation="fallAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
        className=" h-screen"
      >
        <div className="text-white ">
          <div className="flex justify-between items-center o_font2">
            <img
              src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/landing-slide-1-img-1.png"
              alt=""
              className="hidden md:block h-screen p-7"
            />
            <p className="relative uppercase text-4xl md:text-6xl text-green-500">
              Dish <br />{" "}
              <span className="text-white flex my-3">
                detective <FaSearchengin className="ml-2 text-green-500" />
              </span>
              Pro <br />
              <Link to="/about" className="o_font1 font-thin">
                <AwesomeButton type="whatsapp" size="large">
                  About Us
                </AwesomeButton>
              </Link>
            </p>
          </div>
        </div>
        <div
          data-src="https://png.pngtree.com/background/20210714/original/pngtree-black-fashion-summer-hot-pot-food-vegetable-seasoning-picture-image_913336.jpg"
          className="text-white p-8 md:p-48"
        >
          <p className="relative md:left-28 text-xl md:text-3xl">
            <span className="text-green-500 text-4xl md:text-7xl o_font2">
              Food
            </span>{" "}
            is not just about sustenance, it's a <br /> sensory experience that
            tantalizes our taste buds <br /> and ignites our sense of smell and
            texture
          </p>
        </div>

        <div
          data-src="https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg"
          className="text-white"
        >
          <p className="relative bottom-16 p-8 md:left-10 text-xl md:text-3xl">
            <span className="text-4xl md:text-7xl text-green-500 o_font2">
              Great
            </span>{" "}
            food is a symphony of flavors, where <br /> each ingredient plays a
            unique role in creating a <br /> harmonious and unforgettable taste.
          </p>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
