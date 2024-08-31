import "../Style/nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { isLogin } = props;

  return (
    <ul className="list">
      <li className="category">
        <li>
          <Link to="/content">All Products</Link>
        </li>
        <li>
          <Link to="/add">Add Products</Link>
        </li>
        {!isLogin && (
          <>
            <li className="category">
              <Link to="/login">Login</Link>
            </li>
            <li className="category">
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </li>
    </ul>
  );
}

export default Nav;
