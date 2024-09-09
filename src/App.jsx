import React from "react";
import Navbar from "./components/Navbar";
import Table from "./components/TableComponent";
import Pagination from "./components/PaginationComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import HomePage from "./pages/HomePage";
import AddEmployeeForm from "./pages/AddEmployeeForm";
import EditEmployeeForm from "./pages/EmployeeForm";
import LoginPage from "./pages/LoginPage";
import Protect from "./components/Protect";


function App() {
  
  
  return (
      <AppWrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Protect><HomePage/></Protect>} />
          <Route path="/addemployee" element={<Protect><AddEmployeeForm/></Protect>} />
          <Route path="/editemployee/:id" element={<Protect><EditEmployeeForm/></Protect>} />
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
      </AppWrapper>
  );
}

export default App;
