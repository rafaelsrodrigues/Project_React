import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import devList from "../../assets/developer-list/people.json"

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const list=devList.logins;
  const [auxArray,setAuxArray] = useState([]);
  const [aux,setAux] = useState(''); 



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
        setAux(person.local);
        console.log(aux);
      return person
      }
    }))

    
    
    if(auxArray.length > 0){
      navigate("/main");
      localStorage.setItem("user", JSON.stringify(loggedUser))
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user,loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};