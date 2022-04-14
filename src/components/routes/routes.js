import React,{useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage"
import MainPage from "../../pages/MainPage/MainPage"
import SearchPage from "../../pages/SearchPage/SeachPage.js"

import { AuthProvider,AuthContext } from "../Providers/auth";
const AppRoutes = () => {

const Private = ({children}) =>{
const {authenticated, loading} = useContext(AuthContext);

if(loading){return<div>Carregando...</div>}

  if(!authenticated){
    return <Navigate to="/" />;
    }
    return children;
}
  return (
    <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
        </AuthProvider> 
    </BrowserRouter>
  );
};

export default AppRoutes;
