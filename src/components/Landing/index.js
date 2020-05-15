import React from 'react';
import './landing.css';
import { Switch, Card, Button } from 'antd';
import styled from 'styled-components';




class Toggling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            genderState: true,

        };
        this.generate = this.generate.bind(this);
    }

    generate = () => {
        console.table(this.state);
        if(this.state.disabled) {
            AlgorithmAll();
        }
        else{
            if(this.state.genderState) {
                AlgorithmMale();
            }
            else{
                AlgorithmFemale();
            }
        }
    };

    gender = () => {
        this.setState({
            genderState: !this.state.genderState,
        })
    };

    toggle = () => {
        this.setState({
            disabled: !this.state.disabled,

        });
    };

    render() {
        return (
            <div>
                <Switch disabled={this.state.disabled} onClick={this.gender} defaultChecked={"checked"} checkedChildren={"Male Name"} unCheckedChildren={"Female Name"}>Male</Switch>
                <br />
                <Button type="danger" onClick={this.toggle}>
                    All names
                </Button>
                <Button type={"primary"} onClick={this.generate}>Generate</Button>
            </div>
        );
    }
}

function AlgorithmAll() {
    alert("all");
}

function AlgorithmMale() {
    alert("male");
}
function AlgorithmFemale() {
    alert("female");
}

class Output extends React.Component {
    render() {
        return(
          <div>
              <h1>This is great output!</h1>
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
            </Card>
            <Card title={"Output"}>
                    <Output/>
            </Card>
        </div>
    </div>
);

export default Landing;
