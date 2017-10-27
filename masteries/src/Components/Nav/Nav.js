import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/reducer';

class Nav extends Component {

    componentDidMount(){
        this.props.getUser();
    }

    render(){
        return(
            <div className='nav'>
                <div>
                    <Link to='/' className='homeLink'>
                        <h1>Home</h1>
                    </Link>
                </div>
                <div id='reduxLink'>
                    <Link to='/redux'>
                        <h1>Redux</h1>
                    </Link>
                </div>
                <div className='link'>
                    <Link to='/axios'>
                        <h1>Axios</h1>
                    </Link>
                </div>
                <div>
                    {
                        this.props.user
                        ?
                        <div className='user'>
                            <a href={process.env.REACT_APP_LOGOUT}><button>Logout</button></a>
                            <h4>{this.props.user.first_name} {this.props.user.last_name}</h4>
                        </div>
                        :
                        <a href={process.env.REACT_APP_LOGIN}><button>Login</button></a>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { getUser })(Nav);