import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// required for some packages expecting a global object created by webpack
// guess they need to update
window.global ||= window;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
