import React, { Component } from "react";
import Grid from '@mui/material/Grid';

class WebPage extends Component {

    state = {
        name: '',
        DOB: '',
        email: '',
        contact: '',
        tell: '',
        error: {
            nameError: '',
            DOBError: '',
            emailError: '',
            contactError: '',
            tellError: ''
        },
        formIsValid: false
    }

    validateName = (n) => {
        let nameError = this.state.error.nameError;
        let formIsValid = this.state.formIsValid;

        if (n.trim() === '') {
            nameError = 'Please enter your name';
            formIsValid = false;
        }
        else if (!/^[A-Za-z\s]*$/.test(n)){
            nameError = 'Name must contain only alphabets';
            formIsValid = false;
        }
        else {
            nameError = '';
            formIsValid = true;
        }

        this.setState(
            {
                name: n,
                error: { ...this.state.error, nameError },
                formIsValid
            }
        )

        return formIsValid;
    }

    getDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        return day + '-' + month + '-' + year;
    }

    validateDOB = (d) => {
        let DOBError = this.state.error.DOBError;
        let todayDate = this.getDate();
        let formIsValid = this.state.formIsValid;

        if (d.trim() === '') {
            DOBError = 'Please enter your date of birth';
            formIsValid = false;
        }
        else if (d > todayDate){
            DOBError = 'Date of birth must not be after today';
        }
        else {
            DOBError = '';
            formIsValid = true;
        }

        this.setState(
            {
                DOB: d,
                error: { ...this.state.error, DOBError },
                formIsValid
            }
        )

        return formIsValid;
    }

    validateEmail = (e) => {
        let emailError = this.state.error.emailError;
        let formIsValid = this.state.formIsValid;

        if (e.trim() === '') {
            emailError = 'Please enter your email address';
            formIsValid = false;
        }
        else if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e)) {
            emailError = 'Wrong email address format';
            formIsValid = false;
        }
        else {
            emailError = '';
            formIsValid = true;
        }

        this.setState(
            {
                email: e,
                error: { ...this.state.error, emailError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validateContact = (c) => {
        let contactError = this.state.error.contactError;
        let formIsValid = this.state.formIsValid;

        if (c.trim() === '') {
            contactError = 'Please enter your contact number';
            formIsValid = false;
        }
        else if (!/^\d{10}$/.test(c)) {
            contactError = 'Contact number can only have 10 digits';
            formIsValid = false;
        }
        else {
            contactError = '';
            formIsValid = true;
        }

        this.setState(
            {
                contact: c,
                error: { ...this.state.error, contactError },
                formIsValid
            }
        );

        return formIsValid;
    }

    validateTell = (t) => {
        let tellError = this.state.error.tellError;
        let formIsValid = this.state.formIsValid;

        if (t.trim() === '') {
            tellError = 'Please fill in the text box';
            formIsValid = false;
        }
        else {
            tellError = '';
            formIsValid = true;
        }

        this.setState(
            {
                tell: t,
                error: { ...this.state.error, tellError },
                formIsValid
            }
        );

        return formIsValid;
    }

    handleChange = (hc) => {
        console.log(hc);
        console.log(hc.target.value);
        console.log(hc.target.id);

        if (hc.target.id == 'name') {
            this.validateName(hc.target.value);
        }

        if (hc.target.id == 'DOB') {
            this.validateDOB(hc.target.value);
        }

        if (hc.target.id == 'email') {
            this.validateEmail(hc.target.value);
        }

        if (hc.target.id == 'contact') {
            this.validateContact(hc.target.value);
        }

        if (hc.target.id == 'tell') {
            this.validateTell(hc.target.value);
        }
    }

    handleSubmit = (hs) => {
        hs.preventDefault();

        if (this.validateName(this.state.name) && this.validateDOB(this.state.DOB) && this.validateEmail(this.state.email) && this.validateContact(this.state.contact) && this.validateTell(this.state.tell)) {
            this.props.addPage(this.state);
            alert('Form submitted');

            this.setState(
                {
                    name: '',
                    DOB: '',
                    email: '',
                    contact: '',
                    tell: ''
                }
            );
        }
        else {
            alert('Please ensure all fields are filled');
        }

    }

    render() {
        return (
            <Grid container
            justify="center"
            alignItems="center"
            direction="column"
            textAlign="center"
            mt={4} mb={5}
            >
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <label>Name: </label><br></br>
                <input type="text" id="name" onChange={this.handleChange}></input>
                <p style={{ color: 'red' }}>{this.state.error.nameError}</p>
                <br></br>
                <label>Date of birth: </label><br></br>
                <input type="date" max="2-13-13" id="DOB" onChange={this.handleChange} defaultValue={this.getDate()}></input>
                <p style={{ color: 'red' }}>{this.state.error.DOBError}</p>
                <br></br>
                <label>Email Address: </label><br></br>
                <input type="text" id="email" onChange={this.handleChange}></input>
                <p style={{ color: 'red' }}>{this.state.error.emailError}</p>
                <br></br>
                <label>Contact Number: </label><br></br>
                <input type="text" id="contact" onChange={this.handleChange}></input>
                <p style={{ color: 'red' }}>{this.state.error.contactError}</p>
                <br></br>
                <label>Tell me about yourself: </label><br></br>
                <textarea id="tell" rows="7" cols="50" onChange={this.handleChange} >
                </textarea>
                <p style={{ color: 'red' }}>{this.state.error.tellError}</p>
                <br></br>
                <button type="submit">Submit Form</button>
            </form>
            </Grid>
        )
    }
}

export default WebPage;