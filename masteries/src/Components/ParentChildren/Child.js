import React, { Component } from 'react';
import './parentChild.css';

export default class Child extends Component {
    constructor() {
        super();

        this.state = {
            message: '',
            savedMessages: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            message: nextProps.message
        })
    }

    saveMessage(message){
        this.setState({
            savedMessages: [...this.state.savedMessages, message]
        });
    }

    render() {
        let mappedMessages = this.state.savedMessages.map((message, i) => {
            return (
                <div key={i}>
                    <p>{message}</p>
                </div>
            )
        });
        return (
            <div className='child'>
                <div>
                    <h1>This is the child</h1>
                    <h1>Message from parent: {this.state.message}</h1>
                    <button onClick={() => {this.saveMessage(this.state.message)}}>Save Message</button>
                    <button onClick={() => { this.props.removeMessage() }}>Clear Message</button>
                </div>
                <div>
                    {mappedMessages}
                </div>
            </div>
        )
    }
}