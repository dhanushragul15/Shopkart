import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";
import App from "../../../app/App";

const PageLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default PageLayout;