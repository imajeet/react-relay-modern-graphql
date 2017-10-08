import React, {Component} from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'

import UserList from '../components/UserList'

export default class PageUsers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const UsersQuery = graphql`
            query UsersQuery {
                users(first:100) @connection(key: "list_users", filters: []) {
                    edges {
                        node {
                            ...User_user
                        }
                    }
                }
            }
        `;


        return (
            <QueryRenderer
                environment={environment}
                query={UsersQuery}
                render={({error, props}) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return <UserList users={props.users}/>
                    }
                    return <div>Loading</div>
                }}
            />
        )
    }
}