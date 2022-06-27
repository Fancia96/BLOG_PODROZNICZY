import {Link} from "react-router-dom";
import {FiMenu, FiPlusCircle} from "react-icons/fi";

const Header = () => {

    return <header>
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
    </header>
}

export default Header;