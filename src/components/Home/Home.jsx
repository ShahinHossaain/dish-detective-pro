import React, { useEffect } from "react";
import Banner from "../../InsideComponent/HomeInside/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../../InsideComponent/HomeInside/Chef";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LazyLoad from "react-lazy-load";

import {
  faEnvelope,
  faUserCheck,
  faMagnifyingGlass,
  faImage,
  faPencil,
  faComments,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import Swiperr from "../../InsideComponent/HomeInside/Swiper/Swiperr";

const Home = () => {
  const chefs = useLoaderData();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/wg1NrGJ/Pngtree-handdrawn-tropical-fruits-seamless-pattern-1162881.png')",
      }}
      className="pb-16"
    >
      <Banner></Banner>
      <div className="mx-3 md:mx-20 card shadow-lg p-3 md:p-10 bg-base-200 mt-24">
        <p className="text-3xl md:text-5xl text-center o_font3 tracking-2 font-bold font-serif ">
          <span className="text-green-500">SocialChef</span> in numbers
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-between mt-7">
          <div class="bg-slate-300 px-4 md:px-8 w-full py-2 md:py-4 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faUserCheck}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              3<span class="">0</span>
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              members
            </p>
          </div>
          <div class="bg-slate-300 px-4 md:px-8 py-2 md:py-4 w-full text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faMagnifyingGlass}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              30
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              recipes
            </p>
          </div>
          <div class="bg-slate-300 px-4 md:px-8 py-2 md:py-4 w-full text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faImage}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              33
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              photos
            </p>
          </div>
          <div class="bg-slate-300 px-4 md:px-8 py-2 md:py-4 w-full text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faPencil}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              44
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              forum posts
            </p>
          </div>
          <div class="bg-slate-300 px-4 md:px-8 py-2 md:py-4 w-full text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faComments}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              55
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              comments
            </p>
          </div>
          <div class="bg-slate-300 px-4 md:px-8 py-2 md:py-4 w-full text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-3xl md:text-5xl my-3"
              icon={faNewspaper}
            />{" "}
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              35
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              Articles
            </p>
          </div>
        </div>
      </div>

      <div className="card shadow-lg bg-base-200 mt-16 md:mt-28 mx-2 md:mx-16 py-4 md:py-8 border-4 border-black">
        <p className="text-center o_font3 text-4xl md:text-7xl text-black font-serif font-bold ">
          <span className="text-green-500">World</span> Class Chefs
        </p>
        <div className="h-1 bg-black w-3/4 md:w-3/5 mx-auto mt-2"></div>

        <div className=" md:grid grid-cols-2 gap-10 mt-2 md:mt-10 p-4 md:p-10">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </div>

      <div className="card shadow-lg bg-base-200 mt-16 md:mt-28 mx-2 md:mx-16 py-4 md:py-8 border-4 border-black overflow-hidden">
        <p className="text-center o_font3 text-4xl md:text-5xl text-black font-serif font-bold ">
          <span className="text-red-600">Top</span>{" "}
          <span className="text-green-500">Ten</span> Food Items...
        </p>
        <div className="h-1 bg-black w-full md:w-3/5 mx-auto mt-2"></div>
        <Swiperr></Swiperr>
      </div>
    </div>
  );
};

export default Home;
