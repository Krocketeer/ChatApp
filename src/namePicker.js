import React, {useState} from "react"

function NamePicker(props) {
    const [name, setName] = useState("")
    const [editName, setEditName] = useState(false)
    return <div className="name">
        {setEditName ?
            <input value = {name}
                   onChange = {e => setName(e.target.value)}
                   onKeyPress = {e => {
                       if (e.key === "Enter" && name) {
                           props.onSend(name)
                           setName(name)
                           setEditName(true)
                       }
                   }}
                   placeholder="Enter username"
            />
            :
            <input value = {editName}
                   onChange = {e => setName(e.target.value)}
                   onKeyPress = {e => {
                       if (e.key === "Enter" && editName) {
                           props.onSend(editName)
                           setName(editName)
                           setEditName(false);
                       }
                   }}
            />
        }

        <div className="edit_name_bar">
            {!setEditName ?
                <div id="save_icon">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/save.png"
                         alt="save icon"
                         onClick={() => {
                             if (name) {
                                 props.onSend(name)
                                 setName(editName)
                                 setEditName(true)
                             }
                         }}
                    />
                </div>
                :
                <div id="edit_icon">
                    <img src="https://image.flaticon.com/icons/png/512/84/84380.png"
                         alt="edit icon"
                         onClick={() => {
                             if (name) {
                                 props.onSend(editName)
                                 setName(editName)
                                 setEditName(false);
                             }
                         }}
                    />
                </div>
            }
        </div>
        {/*<div className="edit_name_bar">*/}
        {/*    <div id="edit_icon">*/}
        {/*        <img src="https://image.flaticon.com/icons/png/512/84/84380.png"*/}
        {/*             alt="edit icon"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*    <div id="save_icon">*/}
        {/*        <img src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/save.png"*/}
        {/*             alt="save icon"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
}
export default NamePicker