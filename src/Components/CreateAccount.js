import React from 'react';
import SignupForm from './SignupForm';

class CreateAccount extends React.Component {
    constructor () {
        super();  
    }

    render () {
        return (
            <div>
                <h1>Create Acccount</h1>
                <SignupForm/>
            </div>
        )
    }
};

export default CreateAccount;