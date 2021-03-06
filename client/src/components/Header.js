import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__one">
          <h1 className="header__title">GreenBook App</h1>
          <Link to="/">
            <img
              src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-15-300x300.png"
              alt="green book logo"
              className="header__logo"
            />
          </Link>
        </div>
        <div className="header__two">
          <form action="" className="header__form">
            <input
              type="text"
              name="searchinput"
              className="header__form-input"
            ></input>
            <button className="header__form-button">Find Books</button>
          </form>
        </div>
      </header>
      <div className="header__divider"></div>

      <main className="blockcontainer">
        <div className="block">
          <h3>Title of Book</h3>
          <p>Information about book</p>
        </div>
        <div className="block">
          <h3>Title of Book</h3>
          <p>Information about book</p>
        </div>
        <div className="block">
          <h3>Title of Book</h3>
          <p>Information about book</p>
        </div>
      </main>
    </>
  );
}

export default Header;
