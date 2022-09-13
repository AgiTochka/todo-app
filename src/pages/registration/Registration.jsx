import {useRef, useState, useEffect, React} from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';
import {useAuth} from "../../hooks/useAuth";

const username_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const password_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Registration = () => {

    const {onLogin} = useAuth();
    const usernameRef = useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setmatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(username_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidpassword(password_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [username, password, matchPassword])

    const handleSubmit = async (e) => {

        try {
            if (password !== matchPassword) {
                setErrMsg('Password is not equal');
            } else {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({username, password}),
                    {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: true
                    }
                );
                onLogin(e, username, password);
            }
        } catch (err) {
            if (err.response?.status >= 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status >= 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status <= 199) {
                setErrMsg('Server is not exists');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    return (
        <>
            <ArtElement/>
            <div className='main-registr'>
                <div className='form-registr'>
                    <div className='text-wellcome'>
                        <p>Wellcome</p>
                        <div className='inputUsername'>
                            <input
                                type="text"
                                id="username"
                                ref={usernameRef}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUsernameFocus(true)}
                                onBlur={() => setUsernameFocus(false)}
                                placeholder='username'
                            />
                        </div>

                        <p>!</p>
                    </div>

                    <div className='input-password'>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validpassword ? "false" : "true"}
                            aria-describedby="passwordnote"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                            placeholder='password'
                        />

                        <input
                            placeholder='password'
                            type="password"
                            id="confirm_password"
                            onChange={(e) => setmatchPassword(e.target.value)}
                            value={matchPassword}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    </div>
                    <div className='btn'>
                            <button className='btn-signup' onClick={handleSubmit}>
                                SIGNUP
                            </button>

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

export default Registration;