import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from './Components/CSS Variables/CSS'

ReactDOM.render(
    <ThemeProvider theme={theme} >
        <App />
    </ThemeProvider>
, document.getElementById("root"));
