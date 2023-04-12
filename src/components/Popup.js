import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  hidePopup(value) {
    this.props.hidePopup(value);
  }

  pluscart(value){
   this.props.increaseCart(value)
  }

  minusCart(value){
    this.props.decreaseCart(value)
  }

  removeCart(value){
     this.props.removeCart(value)
  }

  render() {
  let htmlstring =this.props.arr.map((value) =>{
    if(value.orderquantity > 0){
      return (
        <div key={value.name}>
          <table>
            <tr className="flex-jcsa cart-product">
              <td>{value.name}</td>
              <td>{value.kilogram * value.orderquantity}g</td>
              <td className="ml-20">Rs.{value.rupee * value.orderquantity}</td>
              <div className="flex-jcsb">
              <td><button onClick={() => {this.pluscart(value)}} className="c-btn m">+</button></td>
                <input type="text" className="m" placeholder={value.orderquantity}/>
                <td><button onClick={() => {this.minusCart(value)}} className="c-btn m">-</button></td>
              </div>
                <td>
                  <i onClick={() => {this.removeCart(value)}} className="fa-solid fa-trash-can c-btn-r"></i>
                </td>
            </tr>
          </table>
        </div>
      );
    }else{
      return null;
    }
    })

    if (this.props.showPopup === "show") {
      return (
        <>
          <div className="popup">
            <div className="popup-sec">
              <p
                onClick={() => {
                  this.hidePopup("hide");
                }}
                className="close-popup"
              >
                X
              </p>
              <tr className="flex-jcsa pop-head">
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Change Qty</th>
                <th>RemoveItem</th>
              </tr>
              {htmlstring}
              <div>
                <button className="ml20 buy">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return null;
   }
  }
}

export default Popup;
