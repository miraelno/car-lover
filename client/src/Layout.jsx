import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout(){
    return(
        <div className="min-h-screen flex flex-col">
            <Header/>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}