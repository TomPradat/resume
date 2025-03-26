import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const wrapper = document.getElementById("root");

if (!wrapper) {
  console.error("Element with id 'root' not found, aborting...");
} else {
  const root = createRoot(wrapper);

  root.render(<App />);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
