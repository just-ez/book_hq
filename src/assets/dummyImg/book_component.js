import React from 'react';
import img1 from '../dummyImg/matt-ridley-H-LIL57PHCc-unsplash.jpg'
import '../../css/book.css'
 let Book = ({name,  genre}) => {
    return (
        <div className="book">
        <div className="boo_cover">
          <img src={img1} alt="" />
        </div>
        <div className="book_details">
         <p>{name}</p>
          {/* <span className='span'> {author.user_name}</span>  */}
         <div className="review">
         <span className="material-symbols-outlined">
          star
        </span>
         <span className="material-symbols-outlined">
          star
        </span>
         <span className="material-symbols-outlined">
          star
        </span>
        <span className="material-symbols-outlined">
          star_half
        </span>
         </div>
        </div>
      </div>
    )
 }

 export default Book