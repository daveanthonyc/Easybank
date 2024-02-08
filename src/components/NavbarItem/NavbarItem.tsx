import { ReactNode } from "react";
import "./NavbarItem.css";

function NavbarItem({children, link} : {children: ReactNode, link: string}) {
    return (
        <li className="navbar-item">
            <a href={link} className="navbar-link">{children}</a>
        </li>
    )
}

export default NavbarItem;
