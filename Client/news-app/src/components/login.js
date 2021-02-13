import React from 'react'

export default function Login() {
    return (
        <div>
            <div className = "container-fluid login-card  d-flex justify-content-center">
             
                <div className = "row d-flex text-center ">
                    <div className = "col-12 py-3 ">
                       <h1>Welcome to news App</h1>
                    </div>
                    <div className = "col-6 py-3 ">
                    <button type="button" className="btn btn-dark btn-lg"onClick = {()=>{
                        window.location.href="/home"
                    }}>Log as normal user</button>
                    </div>
                    <div className = "col-6  py-3 ">
                    <button type="button" className="btn btn-outline-dark btn-lg" onClick = {()=>{
                        window.location.href="/admin"
                    }}>Log as editor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
