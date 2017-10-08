import React, {Component} from 'react'
import {createFragmentContainer, graphql} from 'react-relay'

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {user} = this.props;

        console.log(user);

        return (<div className="app-user">
            <div><h2>{user.name}</h2></div>
            <p>Id:{user._id}</p>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>

        </div>)
    }
}


export default createFragmentContainer(User, graphql`
    fragment User_user on User{
        _id
        name,
        email
    }
`)