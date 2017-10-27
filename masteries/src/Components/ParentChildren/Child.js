import React, { Component } from 'react';
import './parentChild.css';

export default class Child extends Component {
    constructor() {
        super();

        this.state = {
            message: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            message: nextProps.message
        })
    }

    render() {
        return (
            <div className='child'>
                <div>
                    <h1>This is the child</h1>
                    <h1>Message from parent: {this.state.message}</h1>
                    <button onClick={() => { this.props.removeMessage() }}>Clear Message</button>
                </div>
            </div>
        )
    }
}