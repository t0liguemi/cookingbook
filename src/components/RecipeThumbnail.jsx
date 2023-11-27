import React, { useContext } from "react";
import { Context } from "../store/context.js";
import { useNavigate,useParams } from "react-router-dom";
import AddFavouriteButton from "./AddFavouriteButton.jsx";

const RecipeThumbnail = (props) => {
  const {store, actions} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div
      className={
        "card" +
        (store.favouriteIDs.some((id) => id == props.mealID)
          ? " border border-warning"
          : "")
      }
    >
      <img src={props.mealImg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="fs-4 card-title text-truncate my-2 px-2">
          {props.mealName}
        </h5>
        <p className="fs-5 card-text">{props.mealCategory}</p>
        <p className="text-secondary card-text">
          {props.mealArea}{props.mealTags != null ?" - ":""}
          {props.mealTags != null ? props.mealTags.replaceAll(",", ", ") : ""}
        </p>
        <div className="mt-4 mb-2 pb-2">
          <button
            className="btn btn-primary mx-2"
            onClick={() => navigate("/recipe/" + props.mealID)}
          >
            Read full recipe
          </button>
          <AddFavouriteButton
            mealName={props.mealName}
            mealImg={props.mealImg}
            mealTags={props.mealTags}
            mealCategory={props.mealCategory}
            mealArea={props.mealArea}
            mealID={props.mealID}
          />
        </div>
      </div>
    </div>
  );
};
export default RecipeThumbnail;
