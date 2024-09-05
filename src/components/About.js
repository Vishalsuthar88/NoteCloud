import React,{useEffect} from 'react'


const About = () => {
  useEffect(() => {
    document.title = "NoteCloud - About";
  }, )
 
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">About NoteCloud</h1>
      <p className="lead">
        Welcome to NoteCloud, your ultimate solution for managing notes securely and efficiently. 
        Our platform is designed to help you keep track of your ideas, tasks, and important information in one place, with the peace of mind that your data is protected.
      </p>
      <h2 className="text-secondary mt-5 mb-3">Key Features</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Secure Authentication:</strong> Your data is protected with robust authentication mechanisms including JWT (JSON Web Tokens).
        </li>
        <li className="list-group-item">
          <strong>Manage Your Notes:</strong> Easily add, update, and delete notes with our intuitive user interface.
        </li>
        <li className="list-group-item">
          <strong>Data Security:</strong> All your notes are securely stored using MongoDB, ensuring that your information is both safe and easily accessible.
        </li>
      </ul>
      <h2 className="text-secondary mt-5 mb-3">Technologies Used</h2>
      <p className="lead">
        NoteCloud is built using modern web technologies to ensure a seamless and secure user experience:
      </p>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Express:</strong> A fast, unopinionated, minimalist web framework for Node.js, handling the backend logic and API routes.
        </li>
        <li className="list-group-item">
          <strong>MongoDB:</strong> A NoSQL database that stores your notes securely and efficiently.
        </li>
        <li className="list-group-item">
          <strong>JWT:</strong> JSON Web Tokens are used for secure user authentication, ensuring that your sessions are protected.
        </li>
      </ul>
      <p className="lead mt-4">
        At NoteCloud, we are committed to providing a reliable and secure environment for all your note-taking needs.
      </p>
    </div>
  )
}

export default About