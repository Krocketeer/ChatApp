import React from 'react';
import './App.css';
import Footer from "./footer"

function App() {
  return (
      <main className="main">
        <header>
          <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"
               alt="back arrow"/>
        </header>

        <div className="header_name">
          <p>Person</p>
        </div>

        <div id="right_bubble">Yes</div>
        <div id="left_bubble_1">Message 1</div>
        <div id="left_bubble_2">Message 2</div>

        <Footer />
      </main>
  );
}

export default App;
