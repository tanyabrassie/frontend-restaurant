import React from 'react';

import SearchForm from './SearchForm';

class Home extends React.Component {
    constructor () {
        super();  
    }

    render () {
        return (
            <div>
                <h1>Welcome to Restaurant App</h1>
                <SearchForm/>
            </div>
        )
    }
}

export default Home;