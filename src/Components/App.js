import React from 'react';

import Content from './Content';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            results: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        
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
        fetch(request).then(function(response){
            return response.json();
        }).then(function(data) {
            console.log(data);
            this.setState({results: data});
        });
    }

    render () {
        return (
            <div>
                <Content handleSubmit={this.handleSubmit}/>
            </div>    
        )
    }
}

export default App;