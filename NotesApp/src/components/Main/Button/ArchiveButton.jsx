import React from 'react';

function ArchiveButton({ id, onArchive, filteredNotes }) {
    const isArchived = filteredNotes.find(note => note.id === id)?.archived || false;

    return (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            {isArchived ? 'Unarchive' : 'Archive'}
        </button>
    );
}

export default ArchiveButton;