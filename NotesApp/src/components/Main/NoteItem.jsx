import React from "react";
import ActionButton from './Button/ActionButton'
import { showFormattedDate } from "../../utils";


function NoteItem({title, body, createdAt, id, onDelete, onArchive, notes, filteredNotes}){
    console.log(notes)
    return(
        <li className="note-item">
            <div className="note-item__content">
                <h3 className='note-item__title'>{title}</h3>
                <p className='note-item__date' >{showFormattedDate(createdAt)}</p>      
                <p className='note-item__body' >{body}</p>        
                <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} notes={notes} filteredNotes={filteredNotes}/>
                
            </div>
        </li>
    )
}
export default NoteItem;