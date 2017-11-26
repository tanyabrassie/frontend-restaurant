import React from 'react';

import 'whatwg-fetch';

class SignupForm extends React.Component {
    constructor () {
        super ();
        this.state = {
            emailAddress: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
            const fieldName = event.currentTarget.name;
            this.setState({[fieldName]: event.target.value});
        }

    handleSubmit(event) {
        event.preventDefault();
        const accountInformation = this.state;
        console.log(accountInformation);
        //building the request
        const request = new Request('http://127.0.0.1:1776/createAccount', {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({postData: accountInformation})
        });

        console.log(request);

        fetch(request).then(function(response){
            return response.json();
        }).then((data) => {
            console.log(data);
        });     
    }    

    render () {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Create an Account!</h2>
                <label>Email Address</label>
                <input 
                    type="email"
                    value={this.state.emailAddress}
                    name="emailAddress"
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input 
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Sign Up!"/>      
            </form>
        );
    };
};

export default SignupForm;