import { Context } from "../store/context.js";
import { useNavigate } from "react-router-dom";
import LetterSelector from "./LetterSelector.jsx";
import { useContext } from "react";
function Navbar() {
  const {store,actions}=useContext(Context);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li key="button1">
              <button className="nav-link px-2" onClick={() => navigate("/")}>
                Main page
              </button>
            </li>
            <li key="button2">
              <button
                className="nav-link px-2"
                onClick={() => navigate("/favourites")}
              >
                Favourites ({store.favouriteIDs.length})
              </button>
            </li>
          </ul>
          <div className="mx-4">
            <LetterSelector />
          </div>
        
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
