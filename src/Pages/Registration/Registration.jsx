import React from 'react'
import "./Registration.css"

const Registration = () => {
  return (
    <div className='login-page'>
        <form className='login-form d-flex flex-column row-gap-2 justify-content-center'>
            <h1>Please Register</h1>
            <div classNameName="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name"/>
                <label for="floatingInput">Name</label>
            </div>
            <div classNameName="form-floating mb-3">
                <input type="tel" className="form-control" id="floatingInput" placeholder="Phone number"/>
                <label for="floatingInput">Phone Number</label>
            </div>
            <div classNameName="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
            </div>
            <button className='btn btn-success w-100'>Register</button>
        </form>
        
    </div>
  )
}

export default Registration