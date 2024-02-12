import React from "react";

class InputNote extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title : '',
            createdAt: '',
            body : '',
            archived: false
            

        }


        this.onTitleChangeEventHandler =this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler =this.onBodyChangeEventHandler.bind(this)
        this.onSubmitChangeEventHandler =this.onSubmitChangeEventHandler.bind(this)



    }


    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title: event.target.value
            };
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value
            };
        });
    }

    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <div className="note-input">
                <h2 >Add notes</h2>
                <form action="" onSubmit={this.onSubmitChangeEventHandler}>
                    <p className="note-input__title__char-limit">Characters remaining: {50 - this.state.title.length}</p>
                    <input className="note-input__title" type="text" name="" placeholder="Title" id="" value={this.state.title} maxLength={50} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" type="text" name="" id="" placeholder="Start typing..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button className="note-input">Save</button>
                </form>
            </div>
        );
    }
}


export default InputNote;