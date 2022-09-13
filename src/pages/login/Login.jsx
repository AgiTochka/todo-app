import {useRef, useState, useEffect, useContext, React} from 'react';
import './Login.css';
import {useNavigate, Link} from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';
import { useAuth } from '../../hooks/useAuth';

const LOGIN_URL = '/auth';

const Login = (props) => {


    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const { onLogin } = useAuth();


    return (
        <>
            <ArtElement/>
            <div className='main-login'>
                <form className='form-login' >
                    <div className='text-welcome'>
                        <p>Welcome</p>
                        <p><b>Back</b></p>
                        <p>!</p>
                    </div>

                    <div className='input-user'>
                        <input
                            type="text"
                            id="username"
                            ref={usernameRef}
                            autoComplete="off"
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            required
                        />

                        <input
                            id='password'
                            onChange={(e) => setPassword(e.target.value)}
                            type={'password'}
                            placeholder='password'
                            value={password}
                            required
                        />

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    </div>

                    <div className='btn'>
                        <button className='btn-login' onClick={(e) => onLogin(e, username, password)}>
                            LOGIN
                        </button>

                        <Link to={'/'}>
                            <button className='btn-back'>
                                BACK
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;