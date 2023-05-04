import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Recipies = ({ details, index, toast }) => {
  const notify = () => toast("Wow so easy!");

  const { cooking_method, ingredients, recipe_name, recipe_photo, rating } =
    details;
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (recipy) => {
    setIsFavorited(true);
    toast(recipy + " added to favorites");
  };

  return (
    <div className="mb-16">
      <div
        className={`flex ${
          index % 2 === 0 && "flex-row-reverse"
        } items-center gap-5 shadow-md rounded-lg overflow-hidden`}
      >
        <div className="w-2/5 h-96 p-5 mb-16">
          <img
            src={recipe_photo}
            alt={recipe_name}
            className="w-full h-full rounded-xl"
          />
          <div className="flex items-center mt-4">
            <span className="text-xl font-bold mr-1 text-primary">
              Rating :{" "}
            </span>
            {<Rating style={{ maxWidth: 110 }} value={rating} readOnly />}
            <div className="ml-4">
              <AwesomeButton
                type="danger"
                size="large"
                disabled={isFavorited}
                onPress={() => handleFavorite(recipe_name)}
              >
                {isFavorited ? "Favorited" : "Favorite"}
              </AwesomeButton>
            </div>
          </div>
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
