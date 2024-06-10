import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "../Page/Employee/Liste";
import Create from "../Page/Formulaire/Create";

const Routex = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Create />} />
            <Route path="/list-Employee" element={<List />} />
        </Routes>
    )       
}
export default Routex;
