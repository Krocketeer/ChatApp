import React from 'react'

function Messages(props) {
    return <div className="message">
        <div id="message_bubble">
            {props.text}
        </div>
    </div>
    }

export default Messages