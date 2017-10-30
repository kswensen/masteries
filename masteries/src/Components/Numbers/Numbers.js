import React, { Component } from 'react';
import './Numbers.css';

export default class Numbers extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    componentDidMount(props){
        this.setState({
            number: this.props.match.params.number
        })
    }

    render(){
        return (
            <div className='float'>
                <h1>Number from props.match: {this.state.number}</h1>
            </div>
        )
    }
}