import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("Username : ", userName)
        console.log("password : ", password)
    }

    return (
        <>
            <div className='h-[90vh] bg-[url("/login-dashboard.png")] bg-yellow-400 w-full grid items-center justify-start bg-cover bg-center p-10 md:ps-30 '>
                <div className='bg-white p-6'>
                    <h1 className='text-5xl'>Welcome Back</h1>
                    <p>Login to your Cravings account</p>
                    <form onSubmit={handleSubmit}>
                        <div className='grid mb-4'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' placeholder='Enter your username' value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className='grid mb-4'>
                            <label htmlFor="password">Username</label>
                            <input type="text" name='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Remember Meltw1</label>
                            </div>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;