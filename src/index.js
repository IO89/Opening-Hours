import React from 'react';
import ReactDOM from 'react-dom';
import {OpenHours} from './OpenHours';
import './styles.css'

const App = () => {
    return (
        <div id="box" className="ui card centered">
            <div id="content" className="content">
            <h1 id="title" className="ui header">
                <i className=" mini clock outline icon disabled"/>
                Opening hours
            </h1>
            <OpenHours/>
        </div>
        </div>
    )
};

ReactDOM.render(<App/>, document.querySelector('#root'));