import React from "react";
import { NavLink, HashRouter } from "react-router-dom";
import Home from "../components/Home";

const Sidebar = props => {
    return(
        <HashRouter>
                <div className="sidebar">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="https://www.creative-tim.com" className="simple-text">
                                Creative Tim
                            </a>
                        </div>
                        <ul className="nav">
                            <li className="nav-item active">
                                <NavLink to="" className="nav-link">
                                    <i className="nc-icon nc-chart-pie-35"/>
                                    <p>Dashboard</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="nav-link">
                                    <i className="nc-icon nc-circle-09"/>
                                    <p>User Profile</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="" className="nav-link">
                                    <i className="nc-icon nc-alien-33"/>
                                    <p>Class Management</p>
                                </NavLink>
                            </li>
                            <li className="nav-item active active-pro">
                                <NavLink to="" className="nav-link active">
                                    <i className="nc-icon nc-alien-33"/>
                                    <p>Upgrade to Pro</p>
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
        </HashRouter>
    );
};

export default Sidebar;