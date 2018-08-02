import React, { Component } from 'react';

export default class Section extends React.Component {
    
    addToCart(selected){
        let itemFound = this.cartItems.filter((content)=>{
            return content.name === selected.title;
        });

        if(itemFound.length > 0){
            this.cartItems[this.cartItems.indexOf(itemFound[0])].quantity++;
        }else{
            this.cartItems.push({name:selected.title,quantity:1,price:selected.price});
        }
    };

    gotoCheckout(){

    }

    constructor(){
        super();
        this.cartItems = [];
        this.addToCart = this.addToCart.bind(this);
        this.gotoCheckout = this.gotoCheckout.bind(this);
    }

    render(){
        return (
            <section>
                <div className="item-container">
                    { this.props.varities.map(item => <div className="tea-items" key={item.title}> <div className="item-title">{item.title}</div> <img src={ require('./../assets/tea-glass.jpg')} alt="tea" className="item-img" width="120" height="140"></img> <button className="add" onClick={ () => this.addToCart(item)}>Add</button> </div>) }   
                </div>
            
                <div className="my-cart">
                    <label>Cart:</label>
                    { this.cartItems.map(cartItem => <li key={cartItem.name}>{cartItem.name} x {cartItem.quantity} = {cartItem.quantity * cartItem.price} </li> )}

                    <strong>Subtotal:</strong> {this.cartItems.reduce((accumulator, currentValue, currentIndex, array) => {
                        //console.log(typeof(accumulator),typeof(currentValue));
                        return Number(accumulator) + Number(currentValue.price * currentValue.quantity);
                    },0) }        

                    <button className="add" style={{float:'right'}} onClick={this.gotoCheckout}>Checkout</button>            
                </div>
            
                
            </section>
        )
    }
}