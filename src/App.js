import React, {useEffect} from 'react';
import './App.css';
import Footer from "./footer";
import Messages from "./messages";
import {initialize, useDatu} from "datu";
import {BrowserRouter, Route} from "react-router-dom";
import NamePicker from "./namePicker";

function App() {
    useEffect(()=>{
        const path = window.location.pathname
        if(path.length<2) window.location.pathname='/home'
    }, [])
    return <BrowserRouter>
        <Route path="/:room" component={Room} />
    </BrowserRouter>
}

function Room(props) {
    const room = props.match.params.room
    const {messages, send} = useDatu(room)
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
                onSend={text => send({text, room})}
            />

            <NamePicker />
         </main>
  );
}

export default App;

//Evan's Chatroom Config
// const firebaseConfig = {
//     apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
//     authDomain: "chatter20202020.firebaseapp.com",
//     databaseURL: "https://chatter20202020.firebaseio.com",
//     projectId: "chatter20202020",
//     storageBucket: "chatter20202020.appspot.com",
//     messagingSenderId: "630230183323",
//     appId: "1:630230183323:web:cc967f51fc79e394ca053e"
// };

const firebaseConfig = {
    apiKey: "AIzaSyByf53k7hPlVoWAqr27Ofi5EyNhCE9iX84",
    authDomain: "chatter-apper.firebaseapp.com",
    databaseURL: "https://chatter-apper.firebaseio.com",
    projectId: "chatter-apper",
    storageBucket: "chatter-apper.appspot.com",
    messagingSenderId: "508693714237",
    appId: "1:508693714237:web:203e4a2229e03319a26154",
    measurementId: "G-X4KRPKQJJ5"
};
initialize(firebaseConfig)