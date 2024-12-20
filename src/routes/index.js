import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ExplorePage from "../pages/ExplorePage";
import DetailsPage from "../pages/DetailsPage";
import SearchPage from "../pages/SearchPage"

const router = createBrowserRouter([
    {
        pash: "/MoviesDB",
        element: <App />,
        children: [
            {
                path: "/MoviesDB/",
                element: <Home />
            },
            {
                path: "MoviesDB/:explore",
                element: <ExplorePage />
            },
            {
                path: "MoviesDB/:explore/:id",
                element: <DetailsPage />
            },
            {
                path: "MoviesDB/search",
                element: <SearchPage />
            },
        ]
    }
])

export default router;