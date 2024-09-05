import React,{useContext,useState} from 'react'
import noteContext from '../context/Notes/noteContext'


const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote} = context
    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
            e.preventDefault();
            addNote(note.title,note.description,note.tag)
            props.showAlert("Note Added Successfully!","success")
            setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        setNote({...note ,[e.target.name]:e.target.value})
    }
    return (
        <div className='container my-3'>
            <h1>Add a Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={onChange} minLength={5} value={note.title} required id="title" name='title' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={onChange} minLength={5} value={note.description} required id="description" name='description' />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" onChange={onChange} value={note.tag} id="tag" name='tag' />
                </div>

                <button disabled={note.title.length<5 || note.description.length<5} type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote