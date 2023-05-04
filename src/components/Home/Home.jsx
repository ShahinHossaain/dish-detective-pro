import React, { useEffect } from "react";
import Banner from "../../InsideComponent/HomeInside/Banner";
import { useLoaderData } from "react-router-dom";
import Chef from "../../InsideComponent/HomeInside/Chef";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div>
      <Banner></Banner>

      <div className="mx-20">
        <p className="text-5xl text-center font-bold font-serif mt-24">
          SocialChef in numbers
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-between mt-7">
          <div class="bg-slate-300 px-8 w-40 md:w-44 py-4 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon className="text-5xl my-3" icon={faUserCheck} />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              3<span class="">0</span>
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              members
            </p>
          </div>
          <div class="bg-slate-300 px-8 py-4 w-40 md:w-44 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon
              className="text-5xl my-3"
              icon={faMagnifyingGlass}
            />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              30
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              recipes
            </p>
          </div>
          <div class="bg-slate-300 px-8 py-4 w-40 md:w-44 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon className="text-5xl my-3" icon={faImage} />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              33
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              photos
            </p>
          </div>
          <div class="bg-slate-300 px-8 py-4 w-40 md:w-44 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon className="text-5xl my-3" icon={faPencil} />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              44
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              forum posts
            </p>
          </div>
          <div class="bg-slate-300 px-8 py-4 w-40 md:w-44 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon className="text-5xl my-3" icon={faComments} />
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              55
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              comments
            </p>
          </div>
          <div class="bg-slate-300 px-8 py-4 w-40 md:w-44 text-center transition duration-200 ease-in-out hover:bg-gray-500">
            <FontAwesomeIcon className="text-5xl my-3" icon={faNewspaper} />{" "}
            <p class="text-3xl font-extrabold transition duration-200 ease-in-out hover:text-gray-100">
              35
            </p>
            <p class="text-lg font-bold transition duration-200 ease-in-out hover:text-gray-100">
              Articles
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-7xl font-serif font-bold mt-28">
        World Class Chefs
      </p>
      <div className="md:grid grid-cols-2 mt-10 mx-8 md:mx-16">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>

      <Swiperr></Swiperr>
      <p>Shhain</p>
    </div>
  );
};

export default Home;
