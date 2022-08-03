import {useRef, useState, useEffect, useContext, React} from 'react';
import AuthContext from '../../context/AuthProvider';
import './Login.css';
import {Link} from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setAuth({username, password});
            /*console.log('login: ', username);
            console.log('password: ', password);*/
            setUsername('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (err.response?.status >= 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status >= 400) {
                setErrMsg('Missing usernamename or Password');
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
                <div className='form-login'>
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
                        <Link to={success ? '/home' : '/login'}>
                            <button className='btn-login' onClick={handleSubmit}>
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