import {Outlet} from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={"container mx-auto text-center"}>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout;