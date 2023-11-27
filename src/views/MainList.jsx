import RecipeThumbnail from "../components/RecipeThumbnail";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/context.js";
import { useParams } from "react-router-dom";

function MainList() {
  const { store, actions } = useContext(Context);
  const { startingLetter } = useParams();
  useEffect(() => {
    actions.getRecipesByLetter(startingLetter);
  }, [startingLetter]);

  return (
    <div className="album bg-body-tertiary">
      <div className="container">
      {store.meals[0].idMeal == ""?<h2 className="py-4">No recipes starting with {startingLetter} available</h2>:<h2 className="py-4">
          Recipes starting with the letter {startingLetter}
        </h2>}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-2">
          {store.meals[0].idMeal != "" &&
            store.meals.map((meal) => {
              return (
                <div className="col">
                  <RecipeThumbnail
                    mealName={meal.strMeal}
                    mealImg={meal.strMealThumb}
                    mealTags={meal.strTags}
                    mealCategory={meal.strCategory}
                    mealArea={meal.strArea}
                    mealID={meal.idMeal}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default MainList;
