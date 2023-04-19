import React, {useReducer } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './login/login';
import { stateContext } from '../context/stateContext';
import { initialState, stateReducer } from '../context/reducer';
import Home from './login/home';
import Form from './login/form';
import Fav from './login/fav';
import CardAdd from './login/card';
import Navbar from './login/navbar';
import Product from './login/product';

const Rounting = () => {
  const [state,dispatch] = useReducer(stateReducer,initialState);
  //let navigator = useNavigate();
  // let home =()=>{
  //   nav="/Home"
  // }
  return (
    <div>
      <stateContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
      {state?.isLoggedIn?(
        <>
          <Navbar />
          <Routes>
          <Route path="*" element={<Navigate to={"/Home"}></Navigate>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/Fav" element={<Fav />}></Route>
          <Route path="/CardAdd" element={<CardAdd />}></Route>
          <Route path="/Product" element={<Product />}></Route>
      </Routes>
      </>
      ):(
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Routes>
      )}
        
      </BrowserRouter>
      </stateContext.Provider>
    </div>
  )
}

export default Rounting
