import React, { Component } from 'react';
import axios from 'axios';
import './AxiosCalls.css';

class AxiosCalls extends Component {
    constructor() {
        super();

        this.state = {
            chores: [],
            newChore: '',
            edit: false,
            edittedChore: ''
        }
    }

    componentDidMount() {
        axios.get('/api/getChores').then(res => {
            this.setState({
                chores: res.data
            });
        });
    }

    addChore() {
        axios.post(`/api/addChore/${this.state.newChore}`).then(res => {
            if (res.data === 'Chore has been added') {
                this.setState({ newChore: '' });
            }
        }).then(added => {
            axios.get('/api/getChores').then(res => {
                this.setState({
                    chores: res.data
                });
            });
        });
    }

    delete(chore_id) {
        axios.delete(`/api/deleteChore/${chore_id}`).then(res => {
            if (res.data === 'Chore has been deleted') {
                alert('Chore has been deleted');
            }
        }).then(delelted => {
            axios.get('/api/getChores').then(res => {
                this.setState({
                    chores: res.data
                });
            });
        });
    }

    updateChore(chore_id){
        axios.put(`/api/editChore/${chore_id}/${this.state.edittedChore}`).then(res => {
            if(res.data === 'Chore has been updated'){
                alert('Chore has been updated');
                this.setState({
                    edit: false,
                    edittedChore: ''
                })
            }
        }).then(editted => {
            axios.get('/api/getChores').then(res => {
                this.setState({
                    chores: res.data
                });
            });
        })
    }

    render() {
        let mappedChores = this.state.chores.map((chore, i) => {
            return (
                <div key={i}>
                    {
                        this.state.edit
                            ?
                            <div>
                                <input type="text" defaultValue={chore.chore} onChange={(e) => {this.setState({edittedChore: e.target.value})}}/>
                                <button onClick={() => {this.updateChore(chore.chore_id)}}>Done</button>
                            </div>
                            :
                            <h1>{chore.chore}</h1>
                    }
                    <button onClick={() => this.delete(chore.chore_id)}>Delete</button>
                </div>
            )
        });

        return (
            <div>
                <div>
                    <input type="text" value={this.state.newChore} onChange={(e) => { this.setState({ newChore: e.target.value }) }} />
                    <button onClick={() => this.addChore()}>Add Chore</button>
                    <button onClick={() => this.setState({ edit: true })}>Edit Chores</button>
                </div>
                {mappedChores}
            </div>
        )
    }
}

export default AxiosCalls;