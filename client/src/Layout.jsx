import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout(){
    return(
        <div className="m-6">
            <Header/>
            <Navigation />
            <Outlet />
        </div>
    )
}