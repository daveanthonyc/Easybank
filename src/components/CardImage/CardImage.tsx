import { ReactNode } from "react";
import './CardImage.css';

function CardImage({ children, imgsrc, alt, title, author } : { 
    children: ReactNode, 
    imgsrc: string, 
    alt?: string, 
    title: string, 
    author: string }) { 
    return (
        <div className="card-image">
            <div className="card-image-container">
                <img src={imgsrc} alt={alt} className="card-image-img"/>
            </div>
            <div className="card-image-body">
                <span>By {author}</span>
                <h3>{title}</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default CardImage;
