import React from 'react';
import './App.css';
import Footer from "./footer";
import Messages from "./messages";
import {initialize, useDatu} from "datu";

function App() {
    const {messages, send} = useDatu()
    console.log(messages)
    return (
        <main className="main">
            <header>
                <img src="https://cdn.iconscout.com/icon/free/png-512/back-arrow-1767523-1502427.png"
               alt="back arrow"/>
                <div className="header_name">
                    <p>438 Group Chat</p>
                </div>
            </header>


            <div className="messages">
                {messages.map((m, i) => <Messages text={m.text} key={i} />)}
            </div>

            <Footer
                onSend={(text) => send({text: text})}
            />
         </main>
  );
}

export default App;

const firebaseConfig = {
    apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
    authDomain: "chatter20202020.firebaseapp.com",
    databaseURL: "https://chatter20202020.firebaseio.com",
    projectId: "chatter20202020",
    storageBucket: "chatter20202020.appspot.com",
    messagingSenderId: "630230183323",
    appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};
initialize(firebaseConfig)