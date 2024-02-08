import { ReactNode } from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import logo from "../../../images/logo.svg"

function Navbar({children} : {children: ReactNode}) {
    return(
        <header className="main-header">
            <div className="centered-div flex-between">
                <a href="" className="logo-link">
                    <img src={logo} alt="logo" className="" />
                </a>
                <nav>
                    <ul className="nav-ul">
                        {children}
                    </ul>
                </nav>
                <Button>Request Invite</Button>
            </div>
        </header>
    )
}

export default Navbar;
