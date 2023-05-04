import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chef = ({ chef }) => {
  //   console.log(chef);

  // window.scrollTo(0, 0);

  const {
    chef_name,
    chef_photo,
    likes,
    number_of_recipes,
    years_of_experience,
    id,
  } = chef;
  return (
    <div className="flex flex-col md:flex-row  items-center justify-around mx-auto gap-1  md:gap-16 h-full w-full rounded-md shadow-md p-4 hover:scale-110 transition-transform ease-in-out duration-300 bg-black text-green-500">
      {/* Left side - chef photo */}
      <div className="md:w-1/2 w-5/6 mt-5 md:mt-0 h-64 md:h-full">
        <img src={chef_photo} alt="Chef" className="w-full rounded-md h-full" />
      </div>

      {/* Right side - chef information */}
      <div className="md:w-1/2 px-1 md:px-4 mt-3 md:mt-0">
        <h2 className="text-lg font-bold mb-2">{chef_name}</h2>
        <p className="mb-2">
          Years of Experience:{" "}
          <span className="font-bold">{years_of_experience}</span>
        </p>
        <p className="mb-2">
          Number of Recipes:{" "}
          <span className="font-bold">{number_of_recipes}</span>
        </p>
        <p className="mb-2">
          Likes: <span className="font-bold">{likes}</span>
        </p>
        <Link to={`/chef/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
