import React, {Component, Fragment} from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { HashRouter } from "react-router-dom";
import App from "../components/App";
import '../stylesheets/light-bootstrap-dashboard.css';

const div = document.createElement('div');
div.className = "wrapper";

document.addEventListener("DOMContentLoaded", () => {
    render(
        <App/>,
        document.body.appendChild(div)
    );
});

