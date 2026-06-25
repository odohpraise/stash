import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authSlice';

const Register = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const HandleCreateAccount = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(register({ email, password }));
        navigate("/dashboard");
    };

    return (
        <div className="auth">

            <div className="auth__card">

                <h2 className="auth__title">Create Account</h2>

                <form className="auth__form" onSubmit={HandleCreateAccount}>

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
                        Create Account
                    </button>

                    <button
                        className="btn btn--link"
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        Already have an account? Login
                    </button>

                </form>

            </div>

        </div>
    );
};

export default Register