import React from "react";

const Recipies = ({ details, index }) => {
  console.log(details);
  const { cooking_method, ingredients, recipe_name, recipe_photo } = details;
  return (
    <div className="mb-16">
      <div
        className={`flex ${
          index % 2 === 0 && "flex-row-reverse"
        } items-center gap-5 shadow-md rounded-lg overflow-hidden`}
      >
        <div className="w-2/5 h-96 p-5">
          <img
            src={recipe_photo}
            alt={recipe_name}
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="p-4 w-3/5">
          <h2 className="text-xl font-semibold mb-2">{recipe_name}</h2>
          <p className="text-gray-700 mb-4">{cooking_method}</p>
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          <ul className="list-disc pl-4">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipies;
