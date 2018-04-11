import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {likes:"Orange juice"};
  }

  render() {
    setTimeout(()=> {
      this.setState({likes:"Tea App!"})
    },2000);
    
    const now = new Date();
    const teaList = [{title:"Lemon Tea",image:"/assets/tea-glass.jpg"},{title:"Green Tea",image:"assets/tea-glass.jpg"},{title:"Masala Tea",image:"assets/tea-glass.jpg"},{title:"Ginger Tea",image:"assets/tea-glass.jpg"}];
    return (
      <div className="App">
        <Header likes={this.state.likes} />
        <Section varities={teaList} />
        <Footer />
      </div>
    );
  }
}

export default App;