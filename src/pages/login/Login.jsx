import {useRef, useState, useEffect, useContext, React} from 'react';
import AuthContext from '../../context/AuthProvider';
import './Login.css';
import {Link} from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';

const LOGIN_URL = '/auth';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setpassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, password}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            setAuth({user, password});
            /*console.log('login: ', user);
            console.log('password: ', password);*/
            setUser('');
            setpassword('');
            setSuccess(true);
        } catch (err) {
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
                            ref={userRef}
                            autoComplete="off"
                            placeholder='username'
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        <input
                            id='password'
                            onChange={(e) => setpassword(e.target.value)}
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