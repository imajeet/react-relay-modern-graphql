import React, {Component} from 'react';
import User from "./User";

export default class Users extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        console.log(this.props);

        return (
            <div className={'app-user-list'}>
                {this.props.users.edges.map(({node}) =>
                    <User key={node.__id} user={node}/>
                )}
            </div>
        )
    }
}
