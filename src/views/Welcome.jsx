import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context.js";
import { useNavigate } from "react-router-dom";
import LetterSelector from "../components/LetterSelector.jsx";
import RecipeThumbnail from "../components/RecipeThumbnail.jsx";

function Welcome() {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [ mealCalled, setMealCall ] = useState(false);
  useEffect(() => {
    actions.emptyMeals();
    setMealCall(false);
  }, []);
  return (
    <div className="container">
      <h2 className="mt-5 mb-3">
        Welcome! To find a recipe select its first letter!
      </h2>
      <LetterSelector />
      <h3 className="mt-5 mb-3">Or just click here to get a random recipe:</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          actions.getRandomRecipe();setMealCall(true)
        }}
      >
        Random Recipe
      </button>
      {mealCalled && store.meals.map((meal) => {
        return (

          <div className="w-75 mx-auto">
          <div className="w-50 my-4 mx-auto">
            <RecipeThumbnail
              mealName={meal.strMeal}
              mealImg={meal.strMealThumb}
              mealTags={meal.strTags}
              mealCategory={meal.strCategory}
              mealArea={meal.strArea}
              mealID={meal.idMeal}
            />
          </div>
          </div>
        );
      })}
    </div>
  );
}
export default Welcome;
