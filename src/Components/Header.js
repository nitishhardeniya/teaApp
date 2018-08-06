import React from 'react';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <span className="app-title">{this.props.likes}</span>
                <span className="cart-box">{this.props.cartCount}</span>
            </header>
        )
    }
}