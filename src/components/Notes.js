import React, { useContext, useEffect, useRef,useState } from 'react'
import noteContext from '../context/Notes/noteContext'
import Noteitem from './Noteitem'
import AddNote from './AddNote'
import { useNavigate } from 'react-router-dom'


const Notes = (props) => {
    const context = useContext(noteContext)
    const { notes, getNotes,editNote } = context
    const {showAlert} = props;
    let navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes();

        }
        else{
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])
    const updatenote = (currentNote) => {
        ref.current.click();
        setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({etitle:"",edescription:"",etag:""})
    
    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        showAlert("Note Updated Successfully!","success")
       refClose.current.click()
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={showAlert}/>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" onChange={onChange} minLength={5} required id="etitle" name='etitle' value={note.etitle} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" className="form-control" onChange={onChange} minLength={5} required id="edescription"  value={note.edescription} name='edescription' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" onChange={onChange} id="etag" value={note.etag} name='etag' />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h2 >Your Notes</h2>
                <div className="container">
                {notes.length===0 && "No Notes to display."}
                </div>
                {notes.map((note) => {
                    return <Noteitem updatenote={updatenote} showAlert={showAlert} key={note._id} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes