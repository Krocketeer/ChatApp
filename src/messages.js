import React from 'react'

function Messages(props) {
    return <div className="message" style={{
            textAlign: props.isNotMe ? "left" :'right'}}>
        <div>
            <div id="message_bubble" style={{
                background: props.isNotMe ? "rgb(50, 51, 52)": "rgb(48, 209, 88)"
            }}>
                {props.text}
            </div>
            <div className="message-name">
                {props.name || "Unknown"}
            </div>
        </div>
    </div>
    }

export default Messages