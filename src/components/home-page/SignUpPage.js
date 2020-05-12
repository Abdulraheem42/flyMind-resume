import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom'
import {Alert, Button, Form, InputGroup} from "bootstrap-4-react";
import facebook from '../../assets/icons8-facebook-256.png'
import instagram from '../../assets/icons8-instagram-256.png'
import twitter from '../../assets/icons8-twitter-96.png'
import email1 from '../../assets/icons8-email-96.png'
import flyMind from '../../assets/icons8-snitch-96.png'
import linkedIn from "../../assets/icons8-linkedin-128.png";
import gitHub from "../../assets/icons8-github-256.png";

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            password: '',
            confirmPassword: '',
            error: '',
            emailError: ''
        }
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const {email, confirmEmail, password, confirmPassword} = this.state
        console.log('AccoutEmail page values')
        let passw = /^[A-Za-z, 1-9]\w{6,20}$/;
        if(email !== confirmEmail){
            this.setState({emailError: 'Email is not match.'})
            return false
        }
        else{
            this.setState({emailError: ''})
        }
        if (!password.match(passw)) {
            this.setState({error: 'Password must be at least 6 Character.'})
            return false
        }
        if (password !== confirmPassword) {
            this.setState({error: 'Password is not match.'})
        }
        else{
            this.setState({error: ''})
        }
        if(this.state.error === ''){
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            this.props.history.push('/sign-in')
        }
    }




    render() {
        const {firstName, lastName, email, confirmEmail, password, confirmPassword, emailError, error} = this.state;
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='home-left-side col-lg-4'>
                        <h2 className="mb-5 mt-3">Sign Up</h2>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="text"
                                    name='firstName'
                                    placeholder='First Name*'
                                    value={firstName}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </InputGroup>
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Last Name*'/>
                            </InputGroup>
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
                                    type="email"
                                    name='confirmEmail'
                                    value={confirmEmail}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Confirm Email Address*'/>
                            </InputGroup>
                            {emailError ? <Alert danger>{emailError}</Alert> : ''}
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="password"
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Password*'/>
                            </InputGroup>
                            <InputGroup mb="3">
                                <Form.Input
                                    required
                                    type="password"
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={this.handleChange.bind(this)}
                                    placeholder='Confirm Password*'/>
                            </InputGroup>
                            {error ? <Alert danger>{error}</Alert> : ''}
                            <Button primary outline type='submit'>Sign Up</Button>
                        </Form>
                        <div className='mt-5'>
                            <p>If you have an account click here: <span><Link to="/sign-in">Sing In</Link></span></p>
                        </div>

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
                    <div className='col-lg-8 px-0'>
                        <div className='home-side-img'>
                            <img src={flyMind} alt=""/>
                            <div className=''>
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

export default SignUpPage;