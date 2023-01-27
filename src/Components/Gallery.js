import { Component } from "react";
import book from '../Images/771.jpg'

class Gallery extends Component{
    render(){
        return(
            <div>
                {this.props.items.map((item, index)=>{
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return(
                        <a href={infoLink} key={index} target="_blank" rel="noopener">
                            <img src={undefined !== imageLinks ? imageLinks.thumbnail : {book}} 
                            alt={`Pictured: The cover for the book ${title}`} 
                            className="bookCover"/>
                            <header>
                                {title}
                            </header>
                        </a>
                    )
                })}
            </div>
        )
    }
}
export default Gallery;