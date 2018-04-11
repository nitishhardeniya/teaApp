import React, { Component } from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <header><h1>{this.props.likes}</h1></header>
        )
    }
}