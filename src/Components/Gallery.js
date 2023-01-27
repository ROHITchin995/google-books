import { Component } from "react";
import './Gallery.css'
class Gallery extends Component{
    render(){
        return(
            <div>
                {this.props.items.map((item, index)=>{
                    let {title, imageLinks, infoLink} = item.volumeInfo;
                    return(
                        <a href={infoLink} key={index} target="_blank" rel="noopener" className="book">
                            <img src={(imageLinks !== undefined) ? imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/2560px-Open_book_nae_02.svg.png" } 
                            alt={`Pictured: The cover for the book ${title}`} 
                            className="bookCover"/>
                            <header className="bookTitle">
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