import React from 'react';

export default class TeaItem extends React.Component {
    
    render(){
        let itemDetails = this.props.itemInfo;
        return (
            <div className="tea-items">
                <div className="card" key={itemDetails.title}> 
                    <div className="item-title">{itemDetails.title}</div>
                    <img src={ require('./../assets/tea-glass.jpg')} alt="tea" className="item-img" width="120" height="140"></img> 
                    <div className="item-price">₹{itemDetails.price}</div>
                    <button className="btn add" onClick={()=>this.props.add(itemDetails)}>Add</button>
                </div>
            </div>
        )
    }
        
    
}