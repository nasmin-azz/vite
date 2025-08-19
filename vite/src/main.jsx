import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Test from "./Test.jsx";
import Parent from "./Parent.jsx";
import Child from "./Child.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Parent />
  </StrictMode>
);
