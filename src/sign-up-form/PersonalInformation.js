import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col } from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class PersonalInformation extends Component {
    constructor(props){
        super(props);
        this.state = ({
            error: '',
            emailError: ''
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // const {values} = this.props;
        // const {email, confirmEmail, password, confirmPassword} = values
        console.log(this.props.values, 'AccoutEmail page values')

        if(this.state.error === ''){
            this.props.nextStep();
        }
    }


    render() {
        const {values} = this.props;
        const {fullName, fatherName, email, country, phone,region, gender, address} = values;
        return (
            <div>
            <div className='account-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-8'>
                            <h2 className="py-5 text-white"><span className='theme-color'>Tell us</span> about your Personal Information </h2>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Row className=''>
                                    <Form.Group as={Col} className='ml-0 mr-5'>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='fullName'
                                            placeholder='Full Name*'
                                            value={fullName}
                                            onChange={this.props.handleChange('fullName')}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='fatherName'
                                            placeholder='Father Name*'
                                            value={fatherName}
                                            onChange={this.props.handleChange('fatherName')}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} mb="3" className='mr-5' >
                                        <Form.Control
                                            required
                                            type="email"
                                            name='email'
                                            placeholder='Email*'
                                            value={email}
                                            onChange={this.props.handleChange('email')}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            required
                                            type="text"
                                            name='phone'
                                            placeholder='phone*'
                                            value={phone}
                                            onChange={this.props.handleChange('phone')}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <CountryDropdown
                                            className='w-100 country'
                                            value={country}
                                            onChange={(val) => this.props.selectCountry(val)} />
                                    </Form.Group>

                                    <Form.Group as={Col} className="ml-5">
                                        <RegionDropdown
                                            className='w-100 region'
                                            country={country}
                                            value={region}
                                            onChange={(val) => this.props.selectRegion(val)} />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group as={Col} className='px-0' mb="3">
                                    <Form.Control
                                        required
                                        type="text"
                                        name='address'
                                        value={address}
                                        onChange={this.props.handleChange("address")}
                                        placeholder='Address*'/>
                                </Form.Group>


                                <Form.Group as={Col} className='pl-0' mb="3">
                                    <Form.Check
                                        className='text-white'
                                        custom
                                        inline
                                        type="radio"
                                        id='custom-radio'
                                        name='gender'
                                        value='Male'
                                        label="Male"
                                        checked={gender === 'Male'}
                                        onChange={this.props.handleChange('Male')}
                                    />

                                    <Form.Check
                                        className='text-white'
                                        custom
                                        inline
                                        label='Female'
                                        type="radio"
                                        id='custom-radio2'
                                        name='gender'
                                        value='Female'
                                        checked={gender === 'Female'}
                                        onChange={this.props.handleChange('Female')}
                                    />
                                </Form.Group>
                                <Button className='mt-5' type='submit'>Next to Education</Button>
                            </Form>
                        </div>
                        <div className='col-lg-2'></div>
                    </div>

                </div>
                </div>
              </div>
        );
    }
}

export default PersonalInformation;