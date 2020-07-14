import React, {useEffect, useState} from "react"
// import {FiEdit} from "react-icons/fi"

function NamePicker(props) {
    const [name, setName] = useState("")
    const [editName, setEditName] = useState(false)

    useEffect(() => {
        const storedName = localStorage.getItem("name")
        if (storedName) {
            setName(storedName)
            props.saveName(storedName)
        }
    }, [])

    return <div className="name">
        {!editName && <>
            {name}
            <div className="edit_name_bar">
                <div id="edit_icon">
                    <img src="https://image.flaticon.com/icons/png/512/84/84380.png"
                         alt="edit icon"
                         onClick={() => {
                             setEditName(!editName);
                             if (name) {
                                 setName(name)
                                 props.saveName(name)
                             }
                         }}
                    />
                </div>
            </div>
        </>
    }
        {editName && <>
            <input value={name}
                   onChange={e => setName(e.target.value)}
                   onKeyPress={e => {
                       if (e.key === "Enter" && name) {
                           setName(name)
                           setEditName(!editName);
                       }
                   }}
                   placeholder="Enter username"
            />
            <div className="edit_name_bar">
                <div id="save_icon">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/03-text-editing/save.png"
                         alt="save icon"
                         onClick={() => {
                             if (name) {
                                 setName(name)
                                 setEditName(!editName)
                                 props.saveName(name)
                                 localStorage.setItem("name", name)
                             }
                         }}
                    />
                </div>
            </div>
        </>
    }
    </div>
}

export default NamePicker