import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipies from "../../InsideComponent/ChefDetailsInside/Recipies";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {
  const chef = useLoaderData();
  // console.log(chef);
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
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/collection-handrawn-elements-fast-food_125540-314.jpg?size=626&ext=jpg')",
      }}
      className="pb-20"
    >
      <ToastContainer />
      <div className=" p-8 flex items-center justify-center text-white bg-black">
        <div className="max-w-5xl mx-auto flex items-center gap-x-20">
          <img
            className="w-80 h-96 rounded-full mr-8 border-2 border-green-500"
            src={chef_photo}
            alt="Chef"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2 text-green-500">
              Chef {chef_name}
            </h1>
            <p className="text-lg mb-4">{bio}</p>
            <p className="text-lg mb-2">
              <span className="font-semibold text-green-500">Likes :</span>{" "}
              {likes}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold text-green-500">
                Number of Recipes:
              </span>{" "}
              {number_of_recipes}
            </p>
            <p className="text-lg mb-2">
              <span className="font-semibold text-green-500">
                Years of Experience:
              </span>{" "}
              {years_of_experience}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-7 md:mx-20 mt-20 card shadow-xl bg-base-200">
        {recipes.map((recipe, index) => (
          <Recipies details={recipe} index={index} toast={toast}></Recipies>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
