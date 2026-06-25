import React, { useEffect } from 'react';
import type { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../features/auth/authSlice';



const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>("")

    const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isAuth) navigate("/dashboard")
    }, [isAuth, navigate])


    const HandleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    return (
        <div className="auth">

            <div className="auth__card">

                <h2 className="auth__title">Login</h2>

                <form className="auth__form" onSubmit={HandleSubmit}>

                    <div className="field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="btn btn--primary" type="submit">
                        Login
                    </button>

                    <button
                        className="btn btn--link"
                        type="button"
                        onClick={() => navigate("/register")}
                    >
                        No account? Create one
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login