import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    useEffect(() => {
      document.title = "NoteCloud - Login";
    }, )
    
    const host = "http://localhost:5000"
    const [credentials, setCredentials] = useState({email:"",password:""})
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response= await fetch(`${host}/api/auth/login/`,{
            method: "POST",
            headers: {
                "Content-Type":'application/json',
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        })
        const json = await response.json()
        console.log(json)
        if(json.success){
            //redirect
            localStorage.setItem("token",json.authToken)
            navigate("/")
            props.showAlert("Logged In Successfully!","success")
        }
        else{
            props.showAlert("Invalid Credentials!","danger");
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (

        <div className='container'>
            <h1>Login Form</h1>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"  required id="email" name='email' onChange={onChange} value={credentials.email} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  required id="password" name='password' onChange={onChange} value={credentials.password} />
                </div>

                <button  type="submit" className="btn btn-primary">Login</button>
            </form>


        </div>
    )
}

export default Login