import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import devList from "../../assets/developer-list/people.json"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const list=devList.logins;
  const [auxArray,setAuxArray] = useState([]);
  const [filteredUser,setFilteredUser] = useState(''); 



  useEffect(() => {
    
    const recoveredUser = localStorage.getItem("user");
    
    if(recoveredUser){setUser(JSON.parse(recoveredUser))}
    setLoading(false);
  }, []);

  const login = (name, password) => {
      const loggedUser = {
      name,
      password,
    };

    setAuxArray(list.filter((person) => {  
      if( person.login === loggedUser.name &&
      person.password == loggedUser.password){
        setFilteredUser(person.local);
      return person
      }
    }))

    if(auxArray.length > 0){
      navigate("/main");
      localStorage.setItem("user", JSON.stringify(loggedUser))
      coordinates();
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const coordinates = () =>{
    const setCoordenates = filteredUser.split(", ")
    const long = setCoordenates[0]
    const lat = setCoordenates[1]
    console.log(lat,long)
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user,loading, login, logout, coordinates }}>
      {children}
    </AuthContext.Provider>
  );
};