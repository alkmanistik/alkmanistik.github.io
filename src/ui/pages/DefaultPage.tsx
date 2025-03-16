import { Outlet } from "react-router";
import NavBar from "../components/NavBar.tsx";

export default function DefaultPage(){

    return <div>

        <NavBar/>
        
        <Outlet/>

    </div>;

}