import React,{useEffect} from 'react'
import Notes from './Notes'
// import AddNote from './AddNote'

const Home = (props) => {
  useEffect(() => {
    document.title = "NoteCloud - Home";
  }, )

  const {showAlert} = props
  return (
    <>
    <div className="container">

      
      <Notes showAlert={showAlert} />
    </div>
    </>


  )
}

export default Home