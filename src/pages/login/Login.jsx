import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

class Login extends React.Component {
    /* constructor(props) {
         super(props);
 
     }*/


    render() {
        return (
            <>
            <Header/>
            <div className='main-login'>
                <div className='form-login'>
                    <div className='text-wellcome'>
                        <p>Wellcome</p>
                        <b>Back</b>
                        <p>!</p>
                    </div>
                    <div className='input-user'>
                        <input id="username" /*value={this.state.username} */ placeholder='username'></input>
                        <input id='password' /*value={this.state.password}*/ type={'password'} placeholder='password'></input>
                    </div>
                    <div className='btn'>
                        <Link to={'/home'}>
                            <button className='btn-login'>
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
}

export default Login;