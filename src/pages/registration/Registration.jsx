import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';



class Registr extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            labelValue: "",
            link: "",
        };
    }



    handleInputChange = (e) => {
        const { id, value } = e.target;


        if (id === "username") {
            this.setState({ username: value });
        }
        if (id === "password") {
            this.setState({ password: value });
        }
        if (id === "passwordConfirm") {
            this.setState({ passwordConfirm: value });
        }

    }

    handleSubmit = () => {
        console.log(this.state.username, this.state.password, this.state.passwordConfirm);
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
                labelValue: '',
                link: "/home"
            });
        }


    }
    render() {
        return (
            <div className='main-registr'>
                <div className='form-registr'>
                    <div className='text-wellcome'>
                        <p>Wellcome</p>
                        <input id="username" value={this.state.username} onChange={(e) => this.handleInputChange(e)} placeholder='Username'></input>
                        <p>!</p>
                    </div>
                    <div className='input-password'>
                        <input id='password' value={this.state.password} onChange={(e) => this.handleInputChange(e)} type={'password'} placeholder='password'></input>
                        <input id='passwordConfirm' value={this.state.passwordConfirm} onChange={(e) => { this.handleInputChange(e); this.checkPassword(e); }} type={'password'} placeholder='password'></input>
                        <label className='errorLabel' id='error'>{this.state.labelValue}</label>
                    </div>
                    <div className='btn'>
                        <Link to={this.state.link}>
                            <button className='btn-signup' onClick={() => this.handleSubmit()}>
                                SIGNUP
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }



}
export default Registr;