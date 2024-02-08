import { ReactNode } from "react";
import './Card.css';

function Card({children, imgSrc, alt, title} : {children: ReactNode, imgSrc: string, alt?: string, title: string}) {
    return (
        <div className="card">
            <img src={imgSrc} alt={alt} />
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    )
}

export default Card;
