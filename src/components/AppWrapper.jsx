import React, { useContext } from "react";

import store from "@/store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./theme-provider";
import { createContext } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import axios from "axios";

export const LoginContext = createContext();
export default function AppWrapper({ children }) {
  const [token,setToken] = useLocalStorage("token");

  axios.defaults.baseURL = 'http://localhost:8081';
  

  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LoginContext.Provider value={{token,setToken}}>

        <Provider store={store}>{children}</Provider>
        </LoginContext.Provider>
      </ThemeProvider>
    </>
  );
}
