import "../Style/nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  const { isLogin ,isUser } = props;
  const handlelogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("isUser");
  };

  return (
    <div>
      
     <ul className="list">
      
      
      <li className="category">
      {isLogin && (
          <>
            <li>
              <Link to="/content">All Products</Link>
            </li>
            {!isUser&&(
              <li>
              <Link to="/add">Add Products</Link>
              </li>
            )}
          </>
        )}
        
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
        {isLogin && (
          <>
            <li className="category">
              <Link onClick={handlelogout} to="/login">Logout</Link>
            </li>
          </>
        )}
      </li>
    </ul>
    </div>
   
  );
}

export default Nav;
