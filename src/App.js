import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Nav from "./components/nav";
import Content from "./components/content";
import AddCard from "./components/Addcard";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Card from "./components/card";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const [isLogin, setIsLogin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [products, setProducts] = useState();


  const location = useLocation();
  const navigate = useNavigate();
  // Get the current path
  const currentPath = location.pathname;

  useEffect(() => {
    // want this to run every time the component is rendered or re-rendered or change happen in local storage
    const triggerChange = setInterval(() => {
      const isLoginTrigger = localStorage.getItem("isLogin") ? true : false;
      setIsLogin(isLoginTrigger);
      const isUserTrigger = localStorage.getItem("isUser") ? true : false;
      setIsUser(isUserTrigger);
      let productTrigger = localStorage.getItem("product");
      productTrigger=JSON.parse( productTrigger)
      console.log(productTrigger);
      setProducts(productTrigger);
      
    }, 2000);
    // cleanup function clear the interval
    return () => {
      // clear the interval for performance and memory and avoid memory leak
      clearInterval(triggerChange);
    };
  }, []);

  // useEffect(() => {

  //   const myName ="Shimaa" ;
  //   alert("You are logged in");
  //   console.log("You are logged in", myName);

  // }, []); // work one time when the component is mounted

  // check if user is logged in to prevent access to certain routes /login /signup
  useEffect(() => {
    if (currentPath === "/login" || currentPath === "/signup") {
      // and user is logged in isLogin = true
      if (isLogin) {
        navigate("/content");
      }
    }
    if (currentPath === "/add") {
      if (isUser) {
        navigate("/content");
      }
    }
  }, [currentPath, isLogin, navigate]);

  const PrivateRoute = ({ children }) => {
    const isLogin = localStorage.getItem("isLogin");

    // ** first time isLogin = null or false
    // ** return to login page

    // ** if user logged in isLogin = true
    // ** return to content page
    return isLogin ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Nav isLogin={isLogin}  isUser={isUser}/>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/content"
          element={
            <PrivateRoute>
              <Content isUser={isUser} />
            </PrivateRoute>
          }
        />
        <Route path="/buy"  element={
            <PrivateRoute>
              <Card products={products}/>
            </PrivateRoute>
          }/>
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddCard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
