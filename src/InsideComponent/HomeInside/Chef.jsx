import React from "react";

const Chef = ({ chef }) => {
  console.log(chef);
  const {
    chef_name,
    chef_photo,
    likes,
    number_of_recipes,
    years_of_experience,
  } = chef;
  return (
    <div>
      <div className="flex items-center justify-around mx-auto w-3/4 h-64 rounded-md shadow-md p-4">
        {/* Left side - chef photo */}
        <div className="w-1/3 h-full">
          <img
            src={chef_photo}
            alt="Chef"
            className="w-full rounded-md h-full"
          />
        </div>

        {/* Right side - chef information */}
        <div className="w-2/3 px-4">
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
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chef;
