import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../../ducks/reducer';

class ReduxMastery extends Component {
    constructor(){
        super();

        this.state = {
            input: ''
        }
    }

    submit(){
        this.props.updateText(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div>
                <div>
                    <input type="text" value={this.state.input} onChange={(e) => {this.setState({input: e.target.value})}}/>
                    <button onClick={() => {this.submit()}}>Submit</button>
                </div>
                <section>
                    <h1>State: {this.state.input}</h1>
                    <h1>Redux: {this.props.submittedText}</h1>
                </section>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { updateText })(ReduxMastery);