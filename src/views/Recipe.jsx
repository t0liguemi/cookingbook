import React, { useContext, useEffect } from "react";
import { Context } from "../store/context.js";
import { useParams } from "react-router-dom";
import AddFavouriteButton from "../components/AddFavouriteButton.jsx";
const Recipe = () => {
  const { store, actions } = useContext(Context);
  const { mealID } = useParams();
  useEffect(() => {
    actions.getRecipesByID(mealID);
  }, []);
  let meal = store.meals[0];
  let ingredientValues = Object.values(meal).slice(9, 29);
  let measureKeys = Object.values(meal).slice(29, 49);
  return (
    <div className="container p-2 my-4">
      <div className="py-3">
        <h2 className="m-3 my-1">{meal.strMeal}</h2><AddFavouriteButton mealName={meal.strMeal}
                  mealImg={store.meals[0].strMealThumb}
                  mealTags={meal.strTags}
                  mealCategory={meal.strCategory}
                  mealArea={meal.strArea}
                  mealID={meal.idMeal}/>
        
        <small className="text-body-secondary">
          {meal.strArea} {meal.strTags != null ? "-" : ""} {meal.strTags.replaceAll(",", ", ")}
        </small>
      </div>
      <div className="container d-flex">
        <div className="col-4">
          <img
            src={store.meals[0].strMealThumb}
            className="card-img-top me-5 object-fit-contain"
            alt="..."
          />
        </div>
        <div className="col-3 mx-3">
          <span className="fs-5 mt-3 mx-2 px-2">
            For this recipe you will need the following ingredients:{" "}
          </span>
          <div className="container border px-3 rounded">
            <ul className="list-group list-group-flush">
              {ingredientValues.map((item, i) => {
                if (ingredientValues[i] != "" && ingredientValues[i] != null)
                  return (
                    <li className="list-group-item" key={i}>
                      {measureKeys[i]} {item}
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
        <div className="col-4">
            <h3>Instructions:</h3>
          <p className="fs-5">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
