// 1) importer React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

//import App from "./components/App";
import App from "./classComponents/App";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(<App />);
