//دلوقتي انا اعتمدت علي فكرة class 

import { Component  ,useEffect ,useState } from 'react';
import {BrowserRouter ,Route ,Routes ,Navigate} from 'react-router-dom'
import Nav from './components/nav';
import Content from './components/content';
import AddCard from './components/Addcard';
import Card from './components/card';
import Cards from './components/cards';
import SignUp from './components/Signup';
import Login from './components/Login';

function App ( ) {
  const [isLogin, setIsLogin] = useState(false);
  localStorage.setItem('islogin', 'false');

  useEffect(() => {
    // Simulate fetching login status, e.g., from localStorage
    const loginStatus = localStorage.getItem('islogin') === 'true';
    setIsLogin(loginStatus);
  }, []);
 
  const PrivateRoute = ({ element }) => {
    const islogin=localStorage.getItem('islogin')
    return islogin=='true'? element : <Navigate to="/login" />;
  };


  
    return (
      <>
      <BrowserRouter>
      
          <Nav islogin={isLogin} />
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login  />} />
            <Route path="/content" element={<PrivateRoute element={<Content />} />} />
            <Route path="/add" element={<PrivateRoute element={<AddCard />} />} />   
          </Routes>
      </BrowserRouter>
      </>
      
    );

  
}

export default App;
