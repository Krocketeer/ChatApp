import React, {useState} from 'react';
import './App.css';
import Footer from "./footer";
import Messages from "./messages";

function App() {
    const [messages, setMessages] = useState([])
    return (
        <main className="main">
            <header>
                <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"
               alt="back arrow"/>
            </header>

            <div className="header_name">
              <p>General Grievous</p>
            </div>

            {messages.map((m, i) => <Messages text={m} key={i} />)}
            {/*<Messages text="hello there"/>*/}

            <Footer hi="hello"
                onSend={(text) => setMessages([...messages, text])}
            />
         </main>
  );
}

export default App;
