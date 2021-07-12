import React, {Component} from "react";
import Routes from "../routes/Index"
import Sidebar from "../layouts/Sidebar";
import Navbar from "../layouts/Navbar";

export default props => <>
    <Sidebar/>
    <div className="main-panel">
        <Navbar/>
        { Routes }
    </div>
</>