import React, {Component} from 'react';
import PersonalInformation from "./PersonalInformation";
import Education from "./Education";
import CareerPage from './CareerPage';
import Resume from "../resum/Resume";

class ResumeForm extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            step: 1,
            fullName: '',
            fatherName: '',
            email: '',
            address: '',
            gender: '',
            companyName: '',
            schoolName: '',
            startDate: new Date(),
            endDate: new Date(),
            degree: '',
            graduationDate: '',
            describeEdu: '',
            language: '',
            city: '',
            region: '',
            country: '',
            phone: '',
            selectedOption: '',
            jobTitle: '',
            jobExperience: '',
            otherInfo: '',
            emailError: '',
            protected: 'false'
        })
    }

    componentDidMount() {
       const matchEmail = localStorage.getItem('email')
       const matchPassword = localStorage.getItem('password')
        if(matchPassword && matchEmail){
            this.setState({protected: true})
        }
        else{
            this.props.history.push('/')
        }
    }

    nextStep = () => {
        console.log('next step')
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    handleChange = input => event => {
        console.log(input, 'input')
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    handleChangeMultiSelect = (selectedOption) => {
        this.setState({
            selectedOption: selectedOption,
        })
    }
    handleChangeMultiLanguage = (language) => {
        this.setState({
            language: language
        })
    }
    selectCountry = (val) => {
        this.setState({ country: val });
    }

    selectRegion = (val) => {
        console.log(val, 'val')
        this.setState({ region: val });
    }

    setStartDate = (val) => {
        this.setState({ startDate: val })
    }

    setEndDate = (val) => {
        this.setState({endDate: val})
    }

    render() {
        console.log(this.state.country)
        const { step, fullName, fatherName, email, gender, address,
            companyName, schoolName, degree, graduationDate, city, region, country, postCode, phone, mobileNo, selectedOption, describeEdu,
                jobTitle, startDate, endDate, language, jobExperience, otherInfo} = this.state;
        const personal = { fullName, fatherName, email, phone, region, gender,country, address};
        const education = {schoolName, degree, graduationDate, describeEdu, city, postCode, mobileNo };
        const careerPage = {companyName, selectedOption, jobTitle, startDate, endDate, language, jobExperience, otherInfo};

        if(this.state.protected){
            switch(step) {
                case 1:
                    return <PersonalInformation
                        nextStep={this.nextStep}
                        selectCountry={this.selectCountry}
                        selectRegion={this.selectRegion}
                        handleChange = {this.handleChange}
                        values={personal}
                    />
                case 2:
                    return <Education
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        values={education}
                    />
                case 3:
                    return <CareerPage
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange = {this.handleChange}
                        setStartDate = {this.setStartDate}
                        setEndDate = {this.setEndDate}
                        handleChangeMultiSelect = {this.handleChangeMultiSelect}
                        handleChangeMultiLanguage = {this.handleChangeMultiLanguage}
                        values={careerPage}
                    />
                case 4:
                    return <Resume PersonalInformation={personal} education={education} career={careerPage}
                    />
        }

        }
    }
}

export default ResumeForm