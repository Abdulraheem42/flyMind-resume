import React, {Component} from 'react';
import logo from "../assets/userIcon.png"
import moment from "moment";
import Pdf from "react-to-pdf";
import Navbar from "./Navbar";

class Resume extends Component {


    render() {
        const {PersonalInformation, education, career} = this.props;
        const  { fullName, fatherName, email, phone, region, gender,country, address} = PersonalInformation;
        const  { schoolName, degree, describeEdu, graduationDate, city } = education;
        const  { companyName, selectedOption, jobTitle, language, startDate, endDate, jobExperience, otherInfo} = career;

        const startyear = moment(startDate).format("MMM YYYY");
        const endyear = moment(endDate).format("MMM YYYY");

        const ref = React.createRef();
        return (
            <div>
                <div>
                    <Navbar fullName={fullName} targetRef={ref} />
                </div>
            <div className='container d-flex justify-content-center flex-column'>
                <div ref={ref} className='resume-wrapper'>
                <div className='d-flex align-items-center'>
                    <span className=''><img src={logo} width='150px' alt=""/></span>
                    <span className='font-size45 ml-5'>
                        {fullName}<br/>
                        <h4 className='theme-color'>{jobTitle}</h4>
                    </span>
                </div>
                <div className='mt-2'>
                    <h1 className='theme-color underline'>Personal Details:</h1>
                    <div>
                    <div><span className='font-size15'>Address: </span> {address}</div>
                    <div><span className='font-size15'>Email: </span> {email}</div>
                    <div><span className='font-size15'>Phone#: </span> {phone}</div>
                    </div>
                    </div>
                    <div className=''>
                        {/*<div><span className='font-size15'>Father's Name:</span> {fatherName}</div>*/}
                        <div><span className='font-size15'>Gender:</span> {gender}</div>
                        <div><span className='font-size15'>Nationality:</span> {country}</div>
                        <div><span className='font-size15'>Region:</span>{region}</div>
                    </div>

                    <div className='mt-2'>
                        <h1 className='theme-color underline'>Summary:</h1>
                        <li className='font-size15'>{describeEdu}</li>
                    </div>
                    <div className='mt-4'>
                        <h1 className='theme-color underline'>Work Experience:</h1>
                        <div><span className='font-size20'>Company Name: </span> {companyName}</div>
                        <div><span className='font-size20'>Duration: </span> {startyear} - {endyear}</div>
                    </div>
                    <div className='mt-4'>
                        <h1 className='theme-color underline'>Education:</h1>
                        <div>
                            <span className='font-size20'>School Name:
                                <h4 className='theme-color'>{schoolName} -{graduationDate}</h4>
                            </span>
                            <div><span className='font-size15'>City:</span>{city}</div>
                            <div><span className='font-size15'>Degree:</span>{degree}</div>
                        </div>
                    </div>

                    <div className=''>
                    <div className='mt-4'>
                        <h1 className='theme-color underline'>Skills:</h1>
                        <ul>
                            {selectedOption ? selectedOption.map( select => {
                                return(
                                    <li key={select.id}>{select.value}</li>
                                )
                            }) : null}
                        </ul>
                    </div>

                    <div className='mt-4'>
                        <h1 className='theme-color underline'>Language:</h1>
                        {language ? language.map(res =>{
                            return(
                                    <span key={res.id}>{res.value}, </span>
                            )
                        }) : null}
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Resume;