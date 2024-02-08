import { ReactNode } from "react";
import "./Button.css";

function Button({children} : {children: ReactNode}) {
    return (
        <button className="custom-button">{children}</button>
    )
}

export default Button;
