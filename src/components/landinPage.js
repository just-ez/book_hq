import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../css/landing.css";

// components
import Nav from "../components/nav";
import bookImng from "../assets/img/hand-holding-stack-books-colorful-isolated-male-hard-cover-white-background-50196925.jpg";
import more from "../assets/img/north_east_FILL0_wght400_GRAD0_opsz48.svg";
import Book from '../assets/dummyImg/book_component'

let LandingPage = ({user}) => {

  
    const [Books, setBooks] = useState([])
  
    useEffect(()=> {
      console.log('effect is running');
      getBooks()

  },[]);
   

  const getBooks = async () => {
    const res = await fetch('http://localhost:4000/books?limit=5')
    const data = await res.json()
   setBooks(data)
  }


  return (
    
    <div className="container">
      <Nav user={user}/>
      <section className="hero_sec">
        <div className="text_content">
          <h2>
            Read, Write, Buy And Sell All Types Of Books With Just One Click
          </h2>
          <p> BookHq is best place for both writer who wants to sell or write a new book or you who likes to read books with bookhq you get amazing books to read.</p>
          
          <button><Link to='/signup'>Get Started</Link></button>
          
        </div>
        <div className="img_container">
          <img src={bookImng} alt="" />
        </div>
      </section>

      <section className="lil_dis">
        <div className="lil_dis_1">
          <h2>Are you looking for a book?</h2>
        </div>
        <div className="lil_dis_2">
          <h2>Have an idea to write a great book?</h2>
        </div>
        <div className="lil_dis_3">
          <h2> Want to sell your book?</h2>
        </div>
      </section>

      <section className="books_sec">
        <h2>Popular Books</h2>
        <div className="books_con">

      {
      Books ? 
      Books.map(book => <Book key={book.id} name={book.book_name} author={book.book_author} genre={book.geners}/>) :
       <p>Loading...</p> 
      }
      
        
        </div>
        <button className="see_more">
          see more <img src={more} alt="" />
        </button>
      </section>
    </div>
  );
};


export default LandingPage;
