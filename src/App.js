import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      appName:"App loading..",
      cartCount:0
    };
  }

  updateCart(prevState) {
    this.setState({
      cartCount:prevState.cartCount+1
    });
  }

  render() {
    setTimeout(()=> {
      this.setState({appName:"Tea App"})
    },2000);

    const teaList = [{title:"Lemon Tea",image:"./../assets/tea-glass.jpg",price:20},{title:"Green Tea",image:"./../assets/tea-glass.jpg",price:30},{title:"Masala Tea",image:"./../assets/tea-glass.jpg",price:15},{title:"Ginger Tea",image:"./../assets/tea-glass.jpg",price:15},{title:"Dum Tea",image:"./../assets/tea-glass.jpg",price:15},{title:"Cardmom Tea",image:"./../assets/tea-glass.jpg",price:15}];
    return (
      <div className="App">
        <Header likes={this.state.appName} cartCount={this.state.cartCount} updateCart={this.updateCart} />
        <Section varities={teaList} />
        <Footer />
      </div>
    );
  }
}

export default App;