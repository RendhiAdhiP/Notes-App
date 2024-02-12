import React from "react";
import InputNote from "./InputNote";
import NoteList from "./NoteList";

function NoteContent({notes, addNote, onDelete, filteredNotes, onArchive}){

    return(
        <div className="note-app__body">
            <InputNote addNote={addNote} />
            
            <NoteList notes={notes} onDelete={onDelete} filteredNotes={filteredNotes} onArchive={onArchive}/>
        </div>
    )
}


export default NoteContent;