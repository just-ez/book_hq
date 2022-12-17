import React, { useEffect, useState } from "react";
import "../css/book.css";
import Book from "../assets/dummyImg/book_component";
// components
import Discover from "./discover_feed";
import Nav from "../components/nav";

const Books = ({ isLoggedIn, user }) => {
  let [book, setBooks] = useState([]);
  useEffect(() => {
    fetchBook();
  }, []);
  const fetchBook = async () => {
    const res = await fetch("http://localhost:4000/books/", {
      method: "GET",
      headers: { authorization: 'cookie.token' },
    });
    const data = await res.json();
    setBooks(data);
  };
  return (
    <>
      <Nav isLoggedIn={isLoggedIn} />
      <main className="Books">
        <aside>
          <section>
            <ul>
              <li
                className={window.location.pathname === "/home" ? "onurl" : ""}
              >
                <span className="material-symbols-outlined">explore</span> Discover
              </li>
              <li className={window.location.pathname === "/home/books" ? "onurl" : ""}>
                <span className="material-symbols-outlined">analytics</span> Top
                Books
              </li>
              {/* <li>
                <span className="material-symbols-outlined">explore</span>{" "}
                Discover
              </li> */}
            </ul>
          </section>
          <section>
            <h2>YOUR BOOkS</h2>
            <ul>
              <li>
                <span className="material-symbols-outlined">menu_book</span>{" "}
                Reading
              </li>
              <li>
                <span className="material-symbols-outlined">bookmarks</span>{" "}
                favourite{" "}
              </li>
              <li>
                <span className="material-symbols-outlined">
                  history_toggle_off
                </span>{" "}
                history
              </li>
            </ul>
          </section>
          <section>
            <h2>SHELVES</h2>
            <ul>
              <li>
                <span className="material-symbols-outlined">analytics</span> Top
                Books
              </li>
            </ul>
          </section>
        </aside>
        <section className="main-section">
          <br />

          <Discover key="discover" data={book} />
           <br/>
           <br/>
          <div className="All_books-container">
          
            {
              book ? book.map((book) => (
                <Book
                key={book.id}
                name={book.book_name}
                genre={book.genre}
              />
              ))
              :
              <p>Loading</p>
            }
          </div>
         
        </section>
      </main>
    </>
  );
};

export default Books;
