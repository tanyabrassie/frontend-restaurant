import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import Counter from './Counter';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './main.css';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>    
), document.getElementById('mount'));
