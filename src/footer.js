import React, {useState} from 'react'

function Footer() {
    const [text, setText] = useState("")
    return  <footer>
        <input value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Type your message here!"
        />
        <div id="message_bar">
            <img src="https://cdn0.iconfinder.com/data/icons/arrows-31/100/arrow-41-512.png"
                 alt="send arrow"/>
        </div>
    </footer>
}

export default Footer