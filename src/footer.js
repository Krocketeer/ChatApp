import React, {useState} from 'react'

function Footer(props) {
    const [text, setText] = useState("")
    return  <footer className="footer">
        <input value={text}
            onChange={e => setText(e.target.value)}
           onKeyPress={e=> {
               if(e.key==='Enter') {
                   props.onSend(text)
                   setText('')
               }
           }}
            placeholder="Type your message here!"
        />
        <div id="message_bar">
            <img src="https://cdn0.iconfinder.com/data/icons/arrows-31/100/arrow-41-512.png"
                 alt="send arrow"
                // onClick={props.foo}
                onClick={() => {
                    props.onSend(text)
                    setText("")
                }}
            />
        </div>
    </footer>
}

export default Footer