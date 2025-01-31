import {createRoot} from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById("root")).render(<App />);

/*
    The createRoot function is a new API that allows you to create a root for a concurrent React tree.
*/