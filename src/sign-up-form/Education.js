import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, Form, Button, Col} from 'react-bootstrap';

class Education extends Component {
    constructor(props){
        super(props);
        this.state = ({
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.values, 'personal information values')
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values} = this.props
        const { schoolName, degree, graduationDate, city, describeEdu} = values;
        return (
            <div className=''>
            <div className='personal-page'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-8'>
                        <h2 className="pt-5"><span className='theme-color'>Tell us</span> about your Education </h2>
                        <h5 className='mb-5 text-white'>Start with your recent university</h5>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <h4>Education</h4>
                            <Form.Row>
                                <Form.Group as={Col} mb="3">
                                    <Form.Control
                                        required
                                        type="text"
                                        name='schoolName'
                                        value={schoolName}
                                        onChange={this.props.handleChange("schoolName")}
                                        placeholder='School Name*'
                                    />
                                </Form.Group>
                                <Form.Group as={Col} className='ml-5'>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='city'
                                        value={city}
                                        onChange={this.props.handleChange("city")}
                                        placeholder='City Name*'
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} mb="3">
                                    <Form.Control
                                        className='w-100'
                                        as="select"
                                        required
                                        value={degree}
                                        name='degree'
                                        onChange={this.props.handleChange("degree")}
                                    >
                                        <option >Degree..</option>
                                        <option value='GED'>GED</option>
                                        <option value='High School Diploma'>High School Diploma</option>
                                        <option value="Associate of Arts">Associate of Arts</option>
                                        <option value="Associates of Science">Associates of Science</option>
                                        <option value="Associates of Applied Science"> Applied Science</option>
                                        <option value="Bachelor of Arts">Bachelor of Arts</option>
                                        <option value="BBA">BBA</option>
                                        <option value="Master of Art">Master of Art</option>
                                        <option value="Master of Science">Master of Science</option>
                                        <option value="MBA">MBA</option>
                                        <option value="J.D">J.D</option>
                                        <option value="Ph.D">Ph.D</option>
                                        <option value="Bachelor of Technology ">Bachelor of Technology</option>
                                        <option value="Master Degree">Master Degree</option>

                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} className=' ml-5' mb="3">
                                    <Form.Control
                                        required
                                        type="text"
                                        name='graduationDate'
                                        value={graduationDate}
                                        onChange={this.props.handleChange("graduationDate")}
                                        placeholder='Graduation year'/>
                                </Form.Group>

                            </Form.Row>

                            <Form.Group as={Col} className='px-0 mt-5' controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h4>Description</h4></Form.Label>
                                <Form.Control as="textarea" rows="3"
                                              required
                                              type="text"
                                              name='describeEdu'
                                              value={describeEdu}
                                              onChange={this.props.handleChange("describeEdu")}
                                              placeholder='Describe your Education...'
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-between">
                                <Button onClick={this.back}>Back</Button>
                                <Button type='submit'>Next to Experience</Button>
                            </div>

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

export default Education;