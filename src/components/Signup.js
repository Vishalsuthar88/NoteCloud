import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    useEffect(() => {
        document.title = "NoteCloud - SignUp";
      }, )
    const host = "https://notecloud-qons.onrender.com"
    const [credentials, setCredentials] = useState({name:"",email:"",password:""})
    let navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response= await fetch(`${host}/api/auth/createuser/`,{
            method: "POST",
            headers: {
                "Content-Type":'application/json',
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
        })
        const json = await response.json()
        console.log(json)
        if(json.success){
            //redirect
            localStorage.setItem("token",json.authToken)
            navigate("/")
            props.showAlert("Account created Successfully!","success");
        }
        else{
            props.showAlert("User already exist!","danger");
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
  return (
    <div>
         <div className='container'>
            <h1>Signup Form</h1>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control"  required id="name" name='name' onChange={onChange} value={credentials.name} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"  required id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  required minLength={5} id="password" name='password' onChange={onChange} value={credentials.password} />
                </div>

                <button  type="submit" className="btn btn-primary">Signup</button>
            </form>


        </div>
    </div>
  )
}

export default Signup