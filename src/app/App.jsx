import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import HomePage from "../pages/HomePage/HomePage";

function App() {
    return (
        <RouterProvider router = {router} />
    )
};

export default App;