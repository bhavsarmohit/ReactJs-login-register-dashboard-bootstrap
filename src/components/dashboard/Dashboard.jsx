import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

export const Dashboard = () => {

    const [uemail, setuemail] = useState(localStorage.getItem("uemail"));
    let upass = localStorage.getItem("upass");
    let uname = localStorage.getItem("uname");
    let umobile = localStorage.getItem("umobile");

    const navigate = useNavigate();

    // =====================
    // CUSTOM LOGIN VALIDATION
    useEffect(() => {
        if (uemail === null || uemail === '') {
            console.log(uemail);
            navigate('/login');
        }
    })
    // =====================

    const logout = () => {
        localStorage.removeItem("uemail")
        localStorage.removeItem("upass")
        localStorage.removeItem("uname")
        localStorage.removeItem("umobile")

        window.location.reload()
    }



    return (
        <div className='container'>
            {/* < div > dashboard</div > */}



            <h1 className='my-5'>Logged User :</h1>
            <div className='float-right'>
                <button className='btn btn-danger' onClick={() => logout()}>LOGOUT</button>
            </div>

            <div className='card p-3 m-3'>

                <h2>Name: {uname}</h2>
                <h2>Mobile: {umobile}</h2>
                <h2>Email: {uemail}</h2>
                <h2>Pass: {upass}</h2>

            </div>
        </div >

    )
}
