import React, { Component } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'

class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     totalAmount : 0,
     showPopup : ""
  }
}

getTotalAmount = (amount) => {
  let totalA = this.state.totalAmount + amount;
  this.setState({
    totalAmount : totalA
  })
}

removeTotal= (val) => {
  let removetotal = this.state.totalAmount - val
  this.setState({
    totalAmount: removetotal
  })
}

cartclick = (val) => {
  this.setState({
    showPopup : val
  })
}

hidePopup = (val) => {
  this.setState({
    showPopup : val
  })
}


  render() {
    return (
      <div>
        <Header cartclick={ this.cartclick }  totalAmount = { this.state.totalAmount }/>
        <Cards sendTotalAmount = { this.getTotalAmount } showPopup = { this.state.showPopup } hidePopup = { this.hidePopup } removeTotal={this.removeTotal} /> 
      </div>
    )
  }
}

export default App
