import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainList from "./views/MainList.jsx";
import Recipe from "./views/Recipe.jsx";
import Favourites from "./views/Favourites.jsx";
import Navbar from "./components/Navbar.jsx";
import injectContext from "./store/context.js";
import Welcome from "./views/Welcome.jsx";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/list/:startingLetter" element={<MainList />} />
          <Route path="/recipe/:mealID" element={<Recipe />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
