import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";


function ActionButton({id ,onDelete, onArchive , notes, filteredNotes}){
    console.log(notes)
    return(
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} notes={notes} filteredNotes={filteredNotes}/>
        </div>
    )
}

export default ActionButton;