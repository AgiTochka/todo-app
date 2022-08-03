import { useRef, useState, useEffect, React } from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import ArtElement from '../../components/artElement/artElement';
import axios from '../../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const password_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Registr = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setpassword] = useState('');
    const [validpassword, setValidpassword] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);

    const [matchPassword, setmatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidpassword(password_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [user, password, matchPassword])

    const handleSubmit = async (e) => {

        try {
            if (password !== matchPassword) {
                setErrMsg('Password is not equal');
            } else {
                const response = await axios.post(REGISTER_URL,
                    JSON.stringify({ user, password }),
                    {
                        headers: { 'Content-Type': 'application/json' },
                        withCredentials: true
                    }
                );
                setSuccess(true);
                //clear state and controlled inputs
                setUser('');
                setpassword('');
                setmatchPassword('');
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
            <ArtElement />
            <div className='main-registr'>
                <div className='form-registr'>
                    <div className='text-wellcome'>
                        <p>Wellcome</p>
                        <div className='inputUsername'>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                                placeholder='Username'
                            />
                        </div>
                        <p>!</p>
                    </div>

                    <div className='input-password'>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setpassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validpassword ? "false" : "true"}
                            aria-describedby="passwordnote"
                            onFocus={() => setpasswordFocus(true)}
                            onBlur={() => setpasswordFocus(false)}
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
                            <Link to={success ? '/home' : '/register'}>
                                SIGNUP
                            </Link>
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


export default Registr;