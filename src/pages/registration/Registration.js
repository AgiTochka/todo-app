import React from 'react';
import './Registration.css';
import logo from './img/logo.png';
import { Link } from 'react-router-dom';



class Registr extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
            labelValue: "",
            link: "",
        };
    }



    handleInputChange = (e) => {
        const { id, value } = e.target;


        if (id === "email") {
            this.setState({ email: value });
        }
        if (id === "password") {
            this.setState({ password: value });
        }
        if (id === "passwordConfirm") {
            this.setState({ passwordConfirm: value });
        }

    }

    handleSubmit = () => {
        console.log(this.state.email, this.state.password, this.state.passwordConfirm);
    }

    checkPassword = (e) => {
        const { value } = e.target;

        if (this.state.password !== value) {
            this.setState({
                labelValue: 'Incorrect. Passwords are different.',
                link: ""
            });
        } else {
            this.setState({
                labelValue:'',
                link: "/home"
            });
        }


    }
    render() {
        return (
            <div className='main-registr'>
                <div className='form-registr'>
                    <div className='logo'>
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className='input-field'>
                        <form>
                            <fieldset className='registr-fieldset'>
                                <legend>E-mail</legend>
                                <input id='email' value={this.state.email} onChange={(e) => this.handleInputChange(e)} type={'email'} placeholder='user@gmail.com'></input>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset className='registr-fieldset'>
                                <legend>Password</legend>
                                <input id='password' value={this.state.password} onChange={(e) => this.handleInputChange(e)} type={'password'} placeholder='password'></input>
                            </fieldset>
                        </form>
                        <form>
                            <fieldset className='registr-fieldset'>
                                <legend>Confirm password</legend>
                                <input id='passwordConfirm' value={this.state.passwordConfirm} onChange={(e) => { this.handleInputChange(e); this.checkPassword(e); }} type={'password'} placeholder='password'></input>
                            </fieldset>
                            <label className='errorLabel' id='error'>{this.state.labelValue}</label>
                        </form>
                    </div>
                    <Link to={this.state.link}>
                        <div className='button-registr' onClick={() => this.handleSubmit()}>
                            Registration
                        </div>
                    </Link>

                </div>
            </div>
        );
    }



}
export default Registr;