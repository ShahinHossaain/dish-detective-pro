import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipies from "../../InsideComponent/ChefDetailsInside/Recipies";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    chef_name,
    chef_photo,
    likes,
    number_of_recipes,
    years_of_experience,
    id,
    bio,
    recipes,
  } = chef;
  return (
    <div>
      <div className="bg-gray-100 p-8 flex items-center justify-center ">
        <div className="max-w-5xl mx-auto flex items-center gap-x-20">
          <img
            className="w-80 h-96 rounded-full mr-8"
            src={chef_photo}
            alt="Chef"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">Chef {chef_name}</h1>
            <p className="text-lg text-gray-600 mb-4">{bio}</p>
            <p className="text-lg text-gray-600 mb-2">Likes: {likes}</p>
            <p className="text-lg text-gray-600 mb-2">
              Number of Recipes: {number_of_recipes}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Years of Experience: {years_of_experience}
            </p>
          </div>
        </div>
      </div>
      <div>
        {recipes.map((recipe) => (
          <Recipies></Recipies>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
