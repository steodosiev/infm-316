import React from "react";

const NameInput = ({name, label, onChange}) => {
    return <div className="name-input-wrapper">
        <label className="name-label">{label}</label>
        <input className="name-input" type="text" value={name} onChange={onChange}/>
    </div>
}

export default NameInput