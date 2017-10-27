import React, { Component } from 'react';
import Child from './Child';
import './parentChild.css';

export default class Parent extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        }
        this.removeMessage = this.removeMessage.bind(this);
    }

    removeMessage() {
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div className='background'>
                <div className='positionAbsoluteContainer'>
                    <h1 className='positionAbsolute'>Type a message to the child component</h1>
                    <input type="text" value={this.state.message} onChange={(e) => { this.setState({ message: e.target.value }) }} />
                    <div className='positionFixed'>
                        <Child message={this.state.message} removeMessage={this.removeMessage} />
                    </div>
                </div>
            </div>
        )
    }
}