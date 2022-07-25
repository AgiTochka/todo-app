import { useRef, useState, useEffect, useContext, React } from 'react';
import AuthContext from '../../context/AuthProvider';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import axios from '../../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setAuth({ user, pwd });
            console.log('login: ', user);
            console.log('password: ', pwd);
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }


    return (
        <>
            <Header />
            <div className='main-login'>
                    <div className='form-login'>
                        <div className='text-wellcome'>
                            <p>Wellcome</p>
                            <b>Back</b>
                            <p>!</p>
                        </div>
                        <div className='input-user'>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                placeholder='username'
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            <input
                                id='password'
                                onChange={(e) => setPwd(e.target.value)}
                                type={'password'}
                                placeholder='password'
                                value={pwd}
                                required
                            />
                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        </div>
                        <div className='btn'>
                            <Link to={success ? '/home' : '/login'}>
                                <button className='btn-login' onClick={handleSubmit} >
                                    LOGIN
                                </button>
                            </Link>
                            <Link to={'/'}>
                                <button className='btn-back'>
                                    BACK
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    );
}


export default Login;