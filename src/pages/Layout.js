import {Outlet, Link} from "react-router-dom";
import {FiMenu, FiPlusCircle} from "react-icons/fi";

const Layout = () => {
    return (
        <>
            <header>
                <div className={"flex p-5"}>
                    <div className={"flex-none"}>
                        <Link to={"/posts"}><FiMenu/></Link>
                    </div>
                    <div className={"flex-1 text-center"}>
                        <Link to={"/"} className={"h-1"}>Fancia's adventure book</Link>
                    </div>
                    <div className={"flex-none"}>
                        <Link to={"/post"}><FiPlusCircle/></Link>
                    </div>
                </div>
                {/*<ul>*/}
                {/*    <FiMenu></FiMenu>*/}
                {/*    <li>*/}
                {/*        <Link to={"/"}>Home</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={"/posts"}><FiMenu></FiMenu></Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={"/post"}>Create posts</Link>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <Link to={"/view"}>View posts</Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </header>
            <div className={"container mx-auto text-center"}>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Layout;