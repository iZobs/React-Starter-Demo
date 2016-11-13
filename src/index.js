import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Nav} from "react-bootstrap";
import {NavItem} from "react-bootstrap";

import Clock from './Clock';
import Toggle from './Toggle';
import SelectorForm from './SelectorForm';

function handleSelect(selectedKey) {
    alert('selected ' + selectedKey);
}

const navInstance = (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
        <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
        <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
        <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
);

/*
ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);

*/

//using the props ways
/*
function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}

setInterval(tick,1000);
*/

ReactDOM.render(
	<SelectorForm></SelectorForm>,
    document.getElementById('root')
);

