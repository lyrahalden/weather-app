import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

ReactDOM.render(
    <Hello to="Ruby" from="Sapphire" />,
    document.getElementById("hello")
);

ReactDOM.render(
    <Clock />,
    document.getElementById("clock")
);

registerServiceWorker();
