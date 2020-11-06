import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        console.log(this.props)
        let userArray = [];
        for (let key in this.props.user ) {
            userArray.push(<li key={key}>{this.props.user[key]}</li>)
        }
        return (
            <>
            <p>this is the test page, where the state has been passed to</p>
            <ul>
                {userArray}
            </ul>
            </>
        )
    }
}
