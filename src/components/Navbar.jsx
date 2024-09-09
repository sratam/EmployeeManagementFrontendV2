import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate,Link } from "react-router-dom";
import { LoginContext } from "./AppWrapper";
import { toast } from "sonner";
import axios from "axios";
const Navbar = () => {
  
  const {token,setToken} = useContext(LoginContext)
  const navigate = useNavigate();

  const handleLogOut = () => {
    setToken("");
    navigate("/login")
    axios.defaults.headers.common["Authorization"] = "";
    toast("You have been logged out")
  };

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-gray-200  dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="flex space-x-4">
          <Link to="/home" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-black dark:hover:text-gray-300">
            Birdi Systems Inc
          </Link>
        </div>

        
        <div className="flex items-center space-x-4">
          
          <Button variant="outline" onClick={() => navigate("/addemployee")}>
            Add Employee
          </Button>
          {token?
          <Button asChild onClick={() => handleLogOut()}>
          <p className="text-white dark:text-black cursor-pointer">
           Log out
          </p>
        </Button>
          :
          <Button asChild>
            <Link to="/login" className="text-white dark:text-black">
             Login
            </Link>
          </Button>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
