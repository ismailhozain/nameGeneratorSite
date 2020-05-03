import React from 'react';
import './landing.css';
import { Switch, Card, Button } from 'antd';

import styled from 'styled-components';


import Output from "./algorithm";
class Toggling extends React.Component {
    state = {
        disabled: false,
    };

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,
        });
    };

    render() {
        return (
            <div>
                <Switch disabled={this.state.disabled} defaultChecked={"checked"} checkedChildren={"Male Name"} unCheckedChildren={"Female Name"}>Male</Switch>
                <br />
                <Button type="danger" onClick={this.toggle}>
                    All names
                </Button>
            </div>
        );
    }
}

const Landing = () => (
    <div className={"all"}>
        <div className={"titleDiv"}>
            <h1 className={"title"}>Name Generator</h1>
        </div>
        <div className={"content"}>
            <Card title={"Configure Output"}>
                <Toggling/>
                <Button type={"primary"}>Generate</Button>
            </Card>
            <Card title={"Output"}>
                <Output/>
            </Card>
        </div>
    </div>
);

export default Landing;
