import {useRef, useState, useEffect, useContext, React} from 'react';
import AuthContext from '../../context/AuthProvider';
import './Login.css';
import {useNavigate, Link} from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';
import useAuth from '../../context/AuthProvider';

const LOGIN_URL = '/auth';

const Login = () => {
    const usernameRef = useRef();
    const errRef = useRef();
    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );

            console.log(JSON.stringify(response?.data));
            setUsername('');
            setPassword('');
            setSuccess(true);
            history('/home');
        } catch (err) {
            console.log('gvhhj err');
            if (err.response?.status >= 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status >= 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status <= 199) {
                setErrMsg('Server is not exists');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            <ArtElement/>
            <div className='main-login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <div className='text-wellcome'>
                        <p>Wellcome</p>
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
                        <button className='btn-login'>
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