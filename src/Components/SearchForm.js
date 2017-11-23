import React from 'react';
import 'whatwg-fetch';

import ResultTile from './ResultTile';

class SearchForm extends React.Component {
    constructor () {
        super();
        this.state = {
            restaurantName: '',
            restaurantResults: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({restaurantName: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { restaurantName } = this.state;
        
        //building the request
        const request = new Request('http://127.0.0.1:1776/search',{
            method: "POST",
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({restaurantName: restaurantName})
        });
    
        console.log(request);
        //giving fetch my request
        //use an arrow function for the callback so the scope of "this" is not within the function, but the component and then refer to this component and set its state.
        // https://stackoverflow.com/a/40403285
        fetch(request).then(function(response) {
            return response.json();
        }).then((data) => {
            this.setState({restaurantResults: data}, () => {
                console.log(this.state.restaurantResults);                
            });
        });
    }

    render () {
        const listComponent = this.state.restaurantResults.map((result, index) => (<ResultTile item={result} key={index} />));
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Search for a restaurant</h2>
                    <label>Restaurant Name</label>
                    <input type="text" value={this.state.restaurantName} onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form> 
                {listComponent}                
            </div>               
        );
    }
}

export default SearchForm;