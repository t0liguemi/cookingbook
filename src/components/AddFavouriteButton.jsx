import React, { useContext } from "react";
import { Context } from "../store/context.js";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoHeartDislike } from "react-icons/io5";

const AddFavouriteButton = (props) => {
  const { store, actions } = useContext(Context);
  if (store.favouriteIDs.some((id)=>id==props.mealID)==false){
  return (
    <button
      className="btn btn-primary mx-2"
      onClick={() =>
        actions.addFavourite(
          props.mealImg,
          props.mealName,
          props.mealCategory,
          props.mealArea,
          props.mealTags,
          props.mealID,
          props.mealImg
        )
      }
    >
      Add to favourites <IoMdHeart className="text-danger"/>
    </button>
  )}else{
    return <button
    className="btn btn-primary mx-2"
    onClick={() =>
      actions.deleteFavourite(
        props.mealID
      )
    }
  >
    Remove from favourites <IoHeartDislike className="text-danger"/>
  </button>
  };
};
export default AddFavouriteButton;
