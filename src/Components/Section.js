import React from 'react';
import TeaItem from './../Components/TeaItem';


export default class Section extends React.Component {
    
    constructor(props){
        super(props);

        //Setting state for Section component
        this.state = {
            cartItems:[]
        };
        //this.cartItems = [];
        this.addToCart = this.addToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.clearCart = this.clearCart.bind(this);
        //this.gotoCheckout = this.gotoCheckout.bind(this);
    }

    addToCart(selected){
        let itemFound = this.state.cartItems.filter( content => content.name === selected.title );
        let cartItems = [...this.state.cartItems];

        if(itemFound.length > 0){
            cartItems[this.state.cartItems.indexOf(itemFound[0])].quantity++;
        }else{
            cartItems.push({name:selected.title,quantity:1,price:selected.price});
        }

        this.setState({
            cartItems
        });

        this.props.updateCart(cartItems.length);
    };

    removeItem(selected){
        let itemIndex = this.state.cartItems.indexOf(selected);
        let cartItems = [...this.state.cartItems];
        cartItems.splice(itemIndex,1);
        this.setState({
            cartItems
        });
    }

    gotoCheckout(){

    }

    clearCart(){
        this.setState({
            cartItems:[]
        });
    }
    
    render(){
        return (
            <section>
                
                <div className="item-container">
                    { this.props.varities.map(item => <TeaItem itemInfo={item} add={this.addToCart} key={item.title} /> ) }   
                </div>

                <div className="my-cart">
                    <label>Cart:</label>
                    <ul>
                    { this.state.cartItems.map(cartItem => <li key={cartItem.name}>{cartItem.name} x {cartItem.quantity} = ₹ {cartItem.quantity * cartItem.price} <span className="remove-item" onClick={() => this.removeItem(cartItem)}>X</span> </li> )}
                    </ul>

                    <div className="cart-footer">
                        <div className="subtotal">
                            <strong>Subtotal:</strong> ₹ {this.state.cartItems.reduce((accumulator, currentValue, currentIndex, array) => {
                                return Number(accumulator) + Number(currentValue.price * currentValue.quantity);
                            },0) }    
                        </div>    
                        <button className="btn remove" onClick={this.clearCart}>Clear items</button>
                        <button className="btn add" onClick={this.gotoCheckout}>Checkout</button>         
                    </div>

                </div>
            
                
            </section>
        )
    }
}