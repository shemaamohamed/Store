import { Component, useEffect, useRef, useState } from 'react';
import '../Style/nav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass , faUser , faHeart ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Nav (probs) {
  const {isLogin }=probs;
  console.log(isLogin)
  

    return (
      <ul className='list'>
        <li className='category'>
        <li><Link    to='/content'>All Products</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        {!isLogin && (
        <>
          <li className='category'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='category'>
            <Link to='/signup'>Signup</Link>
          </li>
        </>
      )}
        </li>
        

        
        
        


      </ul>
    );

  }
  

export default Nav;