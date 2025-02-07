import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Quotes from "./components/Quotes";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/quotes" element={<Quotes />} />
        </Routes>
    </BrowserRouter>
    // BrowserRouter wraps the Routes component, providing routing capabilities.
    // Routes defines different routes, and when a route matches the current URL, the corresponding component will be rendered.
    // Route component is used to define a single route, and its path prop (attribute) specifies the URL pattern for that route.
    // The App component is rendered when the URL is '/', and the Quotes component is rendered when the URL is '/quotes'.
    // BrowserRouter is a higher-order component that provides routing capabilities to its children.
    /* 
    Since the react finds the component which is associated with an url by contains method, we need to make sure that
    it'll render the correct one, not just the first matching route, so we have to add exact attribute
    */

);

/*
    The createRoot function is a new API that allows you to create a root for a concurrent React tree.
*/