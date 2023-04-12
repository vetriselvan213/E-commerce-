import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  cartshow(val){
    this.props.cartclick(val)
  }

  render() {
    return (
      <div className="header">
        <div className="content head flex-jcsb-aic">
          <div>
            <h1>e-commerce</h1>
          </div>
          <div className="w-400 head-right flex-jcsb-aic">
            <p><i onClick={() => {this.cartshow("show")}} className="fa-solid fa-cart-shopping"></i></p>
            <p id="cart">{this.props.totalAmount}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
