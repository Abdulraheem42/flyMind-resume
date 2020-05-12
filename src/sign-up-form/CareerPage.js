import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Form, Button, Col } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker/es";

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
console.log(lngDetector.detect('This is a test.'));


class PersonalInformationPage extends Component {
    constructor(props){
        super(props);
        this.state = ({
        })
    }



    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.values, 'career values')

        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const options = [
            { value: 'Web Designing', label: 'Web Designing' },
            { value: 'Web Development', label: 'Web Development' },
            { value: 'Marketing', label: 'Marketing' },
            { value: 'PhotoShop', label: 'PhotoShop' },
            { value: 'Ms Office', label: 'Ms Office' },
            { value: 'Microsoft', label: 'Microsoft' },
        ];
        const optionsLanguage = [
            { value: 'English', label: 'English' },
            { value: 'Urdu', label: 'Urdu' },
            { value: 'Arabic', label: 'Arabic' },
            { value: 'Spanish', label: 'Spanish' },
        ];

        const {values} = this.props
        const {companyName, selectedOption, jobTitle, startDate, endDate,language, otherInfo} = values;
        console.log(this.props, 'startDate')
        return (
            <div className=''>
            <div className='career-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2'></div>
                        <div className='col-lg-8'>
                            <h2 className="pt-5"><span className='theme-color'>Tell us</span> about your Skills </h2>
                            <h5 className='mb-5 text-white'>Start with the one you are most experienced at</h5>
                            <Form onSubmit={this.handleSubmit.bind(this)}>
                                <h4>Work Experience</h4>
                                <Form.Row>
                                    <Form.Group as={Col} mb="3">
                                        <Form.Control
                                            required
                                            type="text"
                                            name='jobTitle'
                                            value={jobTitle}
                                            onChange={this.props.handleChange('jobTitle')}
                                            placeholder='job Title*'/>
                                    </Form.Group>

                                    <Form.Group className='ml-5' as={Col} mb="3">
                                        <Form.Control
                                            required
                                            type="text"
                                            name='companyName'
                                            value={companyName}
                                            onChange={this.props.handleChange("companyName")}
                                            placeholder='Company Name*'/>
                                    </Form.Group>
                                </Form.Row>

                                <div className='d-flex justify-content-between'>
                                    <Form.Group as={Col} mb="3" className="pl-0">
                                        <div className='text-white'>Start Date</div>
                                        <DatePicker
                                            className='w-100 datePicker pl-2'
                                            selected={startDate}
                                            onChange={date => this.props.setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </Form.Group>

                                    <Form.Group mb="3" as={Col} className="ml-4 pr-0">
                                        <div className='text-white'>End Date</div>
                                        <DatePicker
                                            className='w-100 datePicker pl-2'
                                            selected={endDate}
                                            onChange={date => this.props.setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            placeholder="End Date"
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                        />
                                    </Form.Group>
                                </div>

                                <h4 className='mt-5'>Skills</h4>
                                <Form.Group className='px-0' as={Col} mb="3">
                                    <Select
                                        options={options}
                                        isMulti
                                        isSearchable
                                        required
                                        value={selectedOption}
                                        onChange={selectedOption => this.props.handleChangeMultiSelect(selectedOption)}
                                    />
                                </Form.Group>

                                <Form.Group className='px-0' as={Col} mb="3">
                                    <Form.Control
                                        required
                                        as='textarea'
                                        type="text"
                                        name='otherInfo'
                                        value={otherInfo}
                                        onChange={this.props.handleChange('otherInfo')}
                                        placeholder='About Skills...'/>
                                </Form.Group>

                                <h4 className='mt-5'>Language</h4>
                                <Form.Group className='px-0' as={Col} mb="3">
                                    <Select
                                        options={optionsLanguage}
                                        isMulti
                                        isSearchable
                                        required
                                        value={language}
                                        onChange={language => this.props.handleChangeMultiLanguage(language)}
                                    />
                                </Form.Group>
                                <div className="d-flex justify-content-between">
                                    <Button onClick={this.back}>Back</Button>
                                    <Button type='submit'>Get Your CV</Button>
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

export default PersonalInformationPage;