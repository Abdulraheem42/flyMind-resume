import React, { Component } from 'react';
import { InputGroup, Form, Button, Alert } from 'bootstrap-4-react';
import {Link} from "react-router-dom";
import flyMind from "../../assets/icons8-snitch-96.png";
import facebook from "../../assets/icons8-facebook-256.png";
import linkedIn from "../../assets/icons8-linkedin-128.png";
import gitHub from "../../assets/icons8-github-256.png";
import email1 from "../../assets/icons8-email-96.png";

class SignInPage extends Component {
    constructor(props){
        super(props);
        this.state = ({
            matchEmail: localStorage.getItem('email'),
            matchPassword: localStorage.getItem('password'),
            email: '',
            password: '',
            error: ''
        })
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event){
        event.preventDefault()
        const {matchEmail, matchPassword, email, password, error} = this.state
        if(matchEmail == email && password == matchPassword){
            this.props.history.push('/resume')
        }
        else{
            this.setState({
                error: 'Email or password is Wrong!'
            })
        }
    }


    render() {
        const {email, password, error} = this.state
        return (
            <div className='container-fluid '>
                <div className='row'>
                    <div className='home-left-side col-lg-4 col-md-4 col-sm-4'>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <h2 className="mb-5 mt-3">Sign In</h2>
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="email"
                                    name='email'
                                    value={email}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Email Address*'/>
                            </InputGroup>
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Password*'/>
                            </InputGroup>
                            {error ? <Alert danger>{error}</Alert> : ''}
                            <Button primary outline type='submit'>Sign In</Button>
                        </Form>
                        <div className='mt-4'>
                            <a href='https://www.facebook.com/profile.php?id=100005482005519' target='_blank'>
                                <img src={facebook} alt="" width='50px'/></a>
                            <a href='https://www.linkedin.com/in/abdul-raheem-93b560122/' target='_blank' className='px-3'>
                                <img src={linkedIn} alt="" width='50px'/></a>
                            <a href='https://github.com/Abdulraheem42' target='_blank'>
                                <img src={gitHub} alt="" width='50px'/></a>
                            <a  href="mailto:abdulraheem4255395@gmail.com" target='_blank' className='pl-3'>
                                <img src={email1} alt="" width='50px'/></a>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-8 px-0'>
                        <div className='home-side-img'>
                            <img src={flyMind} alt=""/>
                            <div className='d-flex flex-column justify-content-center justify-content-center'>
                                <p className='font-size45 text-white mb-0'>WELCOME TO</p>
                                <h2 className='font-size50 mb-5 logo-color'><span className='logo-color2'>Fly</span>Mind</h2>
                                <h1 className='text-white'>Create your Resume in  just few steps</h1>
                                <h6>Yes! You can Download in pdf form</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignInPage;