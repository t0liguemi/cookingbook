import RecipeThumbnail from "../components/RecipeThumbnail";
import React, { useContext , useEffect} from "react";
import { Context } from "../store/context.js";
import { useParams, useNavigate } from "react-router-dom";

function Favourites() {
  const { store, actions } = useContext(Context);
  if (store.favouriteIDs != "")return (
    <div className="album bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 py-5">
          {store.favourites.map((meal) => {
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
  ); else return <h2 className="m-4">No favourite meals added</h2>
}
export default Favourites