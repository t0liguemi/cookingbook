const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      meals: [
        {
          idMeal: "",
          strMeal: "",
          strCategory: "",
          strArea: "",
          strInstructions: "",
          strMealThumb: "",
          strTags: "",
          strIngredient1: "",
          strMeasure1: "",
          strTags: ",",
        },
      ],
      favourites: [
        {
          idMeal: "",
          strMeal: "",
          strCategory: "",
          strArea: "",
          strInstructions: "",
          strMealThumb: "",
          strTags: "",
          strIngredient1: "",
          strMeasure1: "",
          strTags: ",",
        },
      ],
      favouriteIDs: [],
    },
    actions: {
      emptyMeals() {
        console.log("vaciando meals");
        setStore({
          meals: [
            {
              idMeal: "",
              strMeal: "",
              strCategory: "",
              strArea: "",
              strInstructions: "",
              strMealThumb: "",
              strTags: "",
              strIngredient1: "",
              strMeasure1: "",
              strTags: ",",
            },
          ],
        });
      },
      getRecipesByLetter(letter) {
        fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=" + letter,
          {
            method: "GET",
            headers: {},
          }
        )
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            }
          })
          .then((data) => {
            let functions = getActions();
            if (data.meals == null) setStore(functions.emptyMeals());
            else {
              setStore({ meals: data.meals });
            }
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },
      getRecipesByID(mealID) {
        fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID,
          {
            method: "GET",
            headers: {},
          }
        )
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ meals: data.meals });
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },
      getRandomRecipe() {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php", {
          method: "GET",
          headers: {},
        })
          .then((resp) => {
            if (resp.status == 200) {
              return resp.json();
            }
          })
          .then((data) => {
            setStore({ meals: data.meals });
          })
          .catch((error) => {
            console.log("error :" + error);
          });
      },
      addFavourite(
        mealImg,
        mealName,
        mealCategory,
        mealArea,
        mealTags,
        mealID
      ) {
        const newFav = {
          idMeal: mealID,
          strMeal: mealName,
          strCategory: mealCategory,
          strArea: mealArea,
          strMealThumb: mealImg,
          strTags: mealTags,
        };
        const newID = mealID;
        const currentStore = getStore();
        if (currentStore.favouriteIDs.some((id) => id == mealID) == false) {
          if (currentStore.favouriteIDs == "") {
            setStore({ favourites: [newFav] });
          } else {
            setStore({ favourites: [...currentStore.favourites, newFav] });
          }
          setStore({ favouriteIDs: [...currentStore.favouriteIDs, newID] });
        }
      },
      deleteFavourite(mealID){
        const currentStore = getStore();
        const newFavourites = currentStore.favourites.filter(meal=>{return meal.idMeal!=mealID})
        const newFavouritesIDs = currentStore.favouriteIDs.filter(id=>{return id!=mealID})
        setStore({favourites:newFavourites})
        setStore({favouriteIDs:newFavouritesIDs})
      }
    },
  };
};
export default getState;
