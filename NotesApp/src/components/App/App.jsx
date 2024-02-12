import React from "react";
import Header from "../Header/Header";
import NoteContent from "../Main/NoteContent";
import { getInitialData, showFormattedDate } from "../../utils/index";

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes : getInitialData(),
            search: '',
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }

    onArchiveHandler(id) {
        const updatedNotes = this.state.notes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        );
      
        this.setState({ notes: updatedNotes });
    }


    onAddNoteHandler({title, createdAt, body}){
        this.setState((prevState)=>{
        return{
                notes: [
                ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        createdAt: new Date().toISOString(),
                        body,
                        archived: false
                    }
                ]
            }
        });
    }

    onChangeSearchHandler(event){
        this.setState(()=>{
            return{
                search : event.target.value
            }
        })
    }


    render(){
        const filteredNotes = this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.search.toLowerCase()) 

        ); // Gunakan nilai pencarian untuk menyaring catatan notes={filteredNotes}
        return(
            <div className="App">
                <Header 
                onChange={this.onChangeSearchHandler} 
                />
                <NoteContent 
                notes={this.state.notes} 
                addNote={this.onAddNoteHandler}  
                onDelete={this.onDeleteHandler} 
                filteredNotes={filteredNotes}
                onArchive={this.onArchiveHandler}
                />
            </div>
        )
    }


}

export default App;