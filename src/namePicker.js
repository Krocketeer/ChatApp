import React, {useState} from "react"

function NamePicker(props) {
    const [name, setName] = useState("")
    const [editName, setEditName] = useState(false)
    return <NamePicker className="name">
    if (!setEditName) {
        <input value = {name}
               onChange = {e => setName(e.target.value)}
               onKeyPress = {e => {
                   if (e.key === "Enter" && name) {
                       props.onSend(name)
                       setEditName(true)
                   }
               }}
               placeholder="Enter username"
        />
    } else {
        <input value = {editName}
               onChange = {e => setName(e.target.value)}
               onKeyPress = {e => {
                   if (e.key === "Enter" && name) {
                       props.onSend(name)
                   }
               }}
        />

    }
        <div className="edit_name_bar">
            <div id="edit_icon">
                <img src="https://image.flaticon.com/icons/png/512/84/84380.png"
                     alt="edit icon"
                />
            </div>
            <div id="save_icon">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/save.png"
                     alt="save icon"
                 />
            </div>
        </div>
    </NamePicker>
}

export default NamePicker