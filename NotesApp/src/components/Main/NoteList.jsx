  import React from 'react';
  import NoteItem from './NoteItem';
  
  function NoteList({ notes, onDelete, filteredNotes, onArchive }) {

    return (

      <div className="Notes">

          <h2>Notes</h2>
            <ul className="notes-list">
              {
                
                notes.filter((note)=>!note.archived).length == 0 ? (
                  <p className='notes-list__empty-message'>No note</p>
                ) :  filteredNotes.length > 0 ? (   
                    filteredNotes.filter((note)=>!note.archived).map((note) => (
                    <NoteItem  key={note.id} id={note.id} onDelete={onDelete} notes={notes} filteredNotes={filteredNotes} onArchive={onArchive} {...note} />
                  ))
                  ) : (
                  <p className='notes-list__empty-message'>Note not found</p>
                )
              } 

            </ul>
          <h2>Archived Notes</h2>
            <ul className='notes-list'>
              {

                notes.filter((note)=>note.archived).length == 0 ? (
                  <p className='notes-list__empty-message'>No Note</p>
                ) :  filteredNotes.length > 0 ? (   
                    filteredNotes.filter((note)=>note.archived).map((note) => (
                    <NoteItem  key={note.id} id={note.id} onDelete={onDelete} notes={notes} filteredNotes={filteredNotes} onArchive={onArchive} {...note} />
                  ))
                  ) : (
                  <p className='notes-list__empty-message'>Note not found</p>
                )
            }
          </ul>
      </div>
    );
  }
  
  export default NoteList;