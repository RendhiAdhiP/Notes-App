import React from "react";

function Header({onChange}){

    const onChangeHandler = (event) => {
        onChange(event);
      };
    return(
        <div className="note-app__header">
            <h1>MyNotes.</h1>
            <div className="note-search">
            <input type="text" placeholder="Search notes" onChange={onChangeHandler} />
            </div>
        </div>
    )
}

export default Header;  
