import React,{useContext} from 'react'
import noteContext from '../context/Notes/noteContext'

const Noteitem = (props) => {
    const  context = useContext(noteContext)
    const {deleteNote,} = context;
    const {note,updatenote} = props;
    return (
        <div className='col-md-3 '>
            <div className="card my-2">
                    <div className="card-body">
                        <div className="d-flex ">
                        <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-trash-can mx-1" onClick={()=>{deleteNote(note._id);
                        props.showAlert("Deleted Successfully!","success")
                    }}></i>
                    <i className="fa-solid fa-pen-to-square mx-1 " onClick={()=>{updatenote(note)}}></i>

                        </div>
                        <p className="card-text">{note.description}</p>
                        
                    </div>
            </div>
        </div>
    )
}

export default Noteitem