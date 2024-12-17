import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import App from "./App.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Home from "./pages/Home.tsx";
import SearchAllWords from "./pages/SearchAllWords.tsx";
import SearchWordMeaning from "./pages/SearchWordMeaning.tsx";
import SearchWordsByLetter from "./pages/SearchWordsByLetter.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/search-all-words",
                element: <SearchAllWords />,
            },
            {
                path: "/search-word-meaning",
                element: <SearchWordMeaning />,
            },
            {
                path: "/search-words-by-letter",
                element: <SearchWordsByLetter />,
            },
            {
                path: "*",
                element: <ErrorPage />,
            },
        ],
    },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
