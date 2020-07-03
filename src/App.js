import React from 'react';
import './App.css';
import Footer from "./footer";
import Messages from "./messages";

function App() {
  return (
      <main className="main">
        <header>
          <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"
               alt="back arrow"/>
        </header>

        <div className="header_name">
          <p>General Grevious</p>
        </div>

        <Messages />
        <Footer />
      </main>
  );
}

export default App;
