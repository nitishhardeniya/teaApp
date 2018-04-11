import React, { Component } from 'react';

export default class Section extends React.Component {
    render(){
        return (
            <section>
                <div className="tea-items">
                    { this.props.varities.map(item => <li>{item.title} <img src="{item.image}"></img></li>) }
                    
                </div>
            </section>
        )
    }
}