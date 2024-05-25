import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home/Home";
import List from "../Page/Employee/Liste";
import Create from "../Page/Employee/Create";

const Routex = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-Employee" element={<List />} />
            <Route path="/Create-Employee" element={<Create />} />
        </Routes>
    )       
}
export default Routex;
