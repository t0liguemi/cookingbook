import { useNavigate } from "react-router-dom";
function LetterSelector() {
  const navigate = useNavigate();
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose a letter
      </button>
      <ul className="dropdown-menu fs-6">
        <li key="navigate_a">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/a")}>
            A
          </p>
        </li>
        <li key="navigate_b">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/b")}>
            B
          </p>
        </li>
        <li key="navigate_c">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/c")}>
            C
          </p>
        </li>
        <li key="navigate_d">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/d")}>
            D
          </p>
        </li>
        <li key="navigate_e">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/e")}>
            E
          </p>
        </li>
        <li key="navigate_f">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/f")}>
            F
          </p>
        </li>
        <li key="navigate_g">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/g")}>
            G
          </p>
        </li>
        <li key="navigate_h">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/h")}>
            H
          </p>
        </li>
        <li key="navigate_i">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/i")}>
            I
          </p>
        </li>
        <li key="navigate_j">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/j")}>
            J
          </p>
        </li>
        <li key="navigate_k">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/k")}>
            K
          </p>
        </li>
        <li key="navigate_l">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/l")}>
            L
          </p>
        </li>
        <li key="navigate_m">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/m")}>
            M
          </p>
        </li>
        <li key="navigate_n">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/n")}>
            N
          </p>
        </li>
        <li key="navigate_o">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/o")}>
            O
          </p>
        </li>
        <li key="navigate_p">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/p")}>
            P
          </p>
        </li>
        <li key="navigate_q">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/q")}>
            Q
          </p>
        </li>
        <li key="navigate_r">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/r")}>
            R
          </p>
        </li>
        <li key="navigate_s">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/s")}>
            S
          </p>
        </li>
        <li key="navigate_t">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/t")}>
            T
          </p>
        </li>
        <li key="navigate_u">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/u")}>
            U
          </p>
        </li>
        <li key="navigate_v">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/v")}>
            V
          </p>
        </li>
        <li key="navigate_w">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/w")}>
            W
          </p>
        </li>
        <li key="navigate_x">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/x")}>
            X
          </p>
        </li>
        <li key="navigate_y">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/y")}>
            Y
          </p>
        </li>
        <li key="navigate_z">
          <p className="dropdown-item py-0 my-0" onClick={() => navigate("/list/z")}>
            Z
          </p>
        </li>
      </ul>
    </div>
  );
}
export default LetterSelector;
