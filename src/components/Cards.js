import React, { Component } from "react";
import Popup from "./Popup";
import Vegetables from "./Vegetables";
import Fruits from "./Fruits";
import DryFruits from "./DryFruits";
import Cereals from "./Cereals";
import Cooking from "./Cooking";

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardobject: Vegetables,
      arr: [],
    };
  }

  displayCard = (value) => {
    this.setState({
      cardobject: value,
    });
  };

  increaseValue(obj) {
    this.setState((prevState) => ({
      cardobject: prevState.cardobject.map((value) => {
        if (value.name === obj.name) {
          return {
            ...value,
            orderquantity: value.orderquantity + 1,
          };
        } else {
          return value;
        }
      }),
    }));
  }

  increaseCart = (value) => {
    this.setState((prevState) => ({
      arr: prevState.arr.map((obj) => {
        if (obj.name === value.name) {
          return {
            ...obj,
            orderquantity: obj.orderquantity + 1,
          };
        } else {
          return obj;
        }
      }),
    }));
  };

  decreaseValue(obj) {
    this.setState((prevState) => ({
      cardobject: prevState.cardobject.map((value) => {
        if (value.name === obj.name && value.orderquantity !== 0) {
          return {
            ...value,
            orderquantity: value.orderquantity - 1,
          };
        } else {
          return value;
        }
      }),
    }));
  }

  decreaseCart = (value) => {
    this.setState((prevState) => ({
      arr: prevState.arr.map((obj) => {
        if (obj.name === value.name && obj.orderquantity !== 1) {
          return {
            ...obj,
            orderquantity: obj.orderquantity - 1,
          };
        } else {
          return obj;
        }
      }),
    }));
  };

  removeCart = (value) => {
    this.setState((prevState) => ({
      arr: prevState.arr.map((obj) => {
        if (obj.name === value.name) {
          return {
            ...obj,
            orderquantity: obj.orderquantity - obj.orderquantity,
          };
        } else {
          return obj;
        }
      }),
    }));
    this.props.removeTotal(value.rupee * value.orderquantity);
  };

  sendTotalAmount(amt) {
    this.props.sendTotalAmount(amt);
  }

  addToCart(obj) {
    let totalAmount = 0;
    let s = 0;

    if (this.state.arr.length > 0) {
      this.setState((prevState) => ({
        arr: prevState.arr.map((value) => {
          if (obj.name === value.name) {
            s = 1;
            return {
              ...value,
              orderquantity: value.orderquantity + obj.orderquantity,
            };
          } else {
            return {
              value,
            };
          }
        }),
      }));
    }
    if (s === 0) {
      let a = this.state.arr.slice();
      a.push(obj);
      this.setState({
        arr: a,
      });
    }

    this.state.cardobject.forEach((value) => {
      if (value.name === obj.name) {
        totalAmount = value.orderquantity * value.rupee;
      }
    });
    this.sendTotalAmount(totalAmount);
  }

  render() {
    let cardvalue = this.state.cardobject.map((obj) => {
      return (
        <div key={obj.name} className="cards">
          <img src={obj.img} alt=""></img>
          <h2>{obj.name}</h2>
          <div className="flex-jcsb-aic card-kg pad-rl-20">
            <p>{obj.kilogram}g</p>
            <p>Rs.{obj.rupee}</p>
          </div>
          <div className="flex-jcsb-aic card-btn">
            <button
              onClick={() => {
                this.increaseValue(obj);
              }}
              className="ml-20 b1"
              type="button"
            >
              +
            </button>
            <p>{obj.kilogram * obj.orderquantity} g</p>
            <button
              onClick={() => {
                this.decreaseValue(obj);
              }}
              className="mr-20 b2"
              type="button"
            >
              -
            </button>
            <p id="p1">Rs. {obj.rupee * obj.orderquantity}</p>
          </div>
          <div>
            <button onClick={() => this.addToCart(obj)} className="addcart">
              Add to Cart <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="flex-jcsb-ait mx-w-95p">
          <div className="side-colm">
            <h4 id="categories">Categories</h4>
            <h3
              onClick={() => {
                this.displayCard(Vegetables);
              }}
            >
              <i className="fa-solid fa-angle-right size"></i> Vegetables
            </h3>
            <h3
              onClick={() => {
                this.displayCard(Fruits);
              }}
            >
              <i className="fa-solid fa-angle-right size"></i> Fruits
            </h3>
            <h3
              onClick={() => {
                this.displayCard(DryFruits);
              }}
            >
              <i className="fa-solid fa-angle-right size"></i> Dry Fruits
            </h3>
            <h3
              onClick={() => {
                this.displayCard(Cereals);
              }}
            >
              <i className="fa-solid fa-angle-right size"></i> Cereals & Muesli
            </h3>
            <h3
              onClick={() => {
                this.displayCard(Cooking);
              }}
            >
              <i className="fa-solid fa-angle-right size"></i> Cooking Supplies
            </h3>
          </div>
          <div className="whole-cards">
            <div className="flex mt20">{cardvalue}</div>
          </div>
        </div>
        <Popup
          showPopup={this.props.showPopup}
          arr={this.state.arr}
          hidePopup={this.props.hidePopup}
          increaseCart={this.increaseCart}
          decreaseCart={this.decreaseCart}
          removeCart={this.removeCart}
        />
      </>
    );
  }
}

export default Cards;
