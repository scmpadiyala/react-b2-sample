import React, { Component } from "react";
import firebase from "firebase";

class OrderManagementComponent extends Component {
  state = { test1: " Welcome by Badrti" };

  constructor() {
    super();
  }

  databaseRef;

  componentDidMount() {
    if (this.databaseRef == undefined) {
      this.initilizeFirebase();
    }
    // this.addOrder();
    //  this.updateOrder();
    // this.setOrder();
    //this.deleteOrder();

    console.log("1. Retrive Orders : Before call");
    this.getOrders();
    console.log("4. Retrive Orders : After call");
  }

  initilizeFirebase() {
    const config = {
      apiKey: "AIzaSyAcrZpZ6luBFnVh6ZLbBTg6JaMoB83BpAU",
      authDomain: "samp le-703db.firebaseapp.com",
      databaseURL: "https://sample-703db.firebaseio.com",
      projectId: "sample-703db",
      storageBucket: "sample-703db.appspot.com",
      messagingSenderId: "795700886936"
    };

    firebase.initializeApp(config);

    this.databaseRef = firebase.database().ref("SajinOrder_Mgmt");
    console.log("database ref : " + this.databaseRef);
  }

  addOrder() {
    console.log("Add Order ");
    this.databaseRef.push({
      ordrid: this.state.ord_id,
      orderName: this.state.ord_name,
      deliveryDate: this.state.ord_del_date,
      deliveryAddress: this.state.ord_del_address,
      status: "booking"
    });
    console.log("Add Order - completed");
  }

  // updateOrder() {
  //   console.log("Update order called");
  //   let udatabaseref = firebase
  //     .database()
  //     .ref("SajinOrder_Mgmt/-LSiG36FeLQk_gZF17kp");
  //   console.log(udatabaseref);
  //   udatabaseref.update({
  //     ordrid: 10000011,
  //     orderName: "Test order for confimration awaited"
  //   });
  //   console.log("Update order completed");
  // }

  updateOrderDeliveryAddress() {
    console.log("Update order called");
    let udatabaseref = firebase
      .database()
      .ref("SajinOrder_Mgmt/" + this.state.ord_id);

    udatabaseref.update({
      deliveryAddress: this.state.ord_del_address,
      status: "order_updated"
    });
    console.log("Update order completed");
  }

  setOrder() {
    console.log("Set order called");
    let udatabaseref = firebase
      .database()
      .ref("SajinOrder_Mgmt/" + this.state.ord_id);
    console.log(udatabaseref);
    udatabaseref.set({
      deliveryAddress: this.state.ord_del_address,
      status: "Order Address Set"
    });
    console.log("Update order completed");
  }

  deleteOrder() {
    console.log("delete order called");
    let udatabaseref = firebase
      .database()
      .ref("SajinOrder_Mgmt/" + this.state.ord_id);
    console.log(udatabaseref);
    udatabaseref.remove();
    console.log("Update order completed");
  }

  getOrders() {
    console.log("2. Read data : " + this.databaseRef);

    // /////////////////////////////////////////////////////////////
    // let test = this.databaseRef.once("value", orders => {
    let test = this.databaseRef.on("value", orders => {
      let i = 0;
      // msgs is a DatabaseSnapshot
      console.log("3. snapshot : " + orders.key + " value " + orders.val());

      orders.forEach(childorder => {
        console.log("Order Key : " + orders.key);
        console.log("Order ID : " + childorder.child("ordrid").val());
        console.log("Order Name : " + childorder.child("orderName").val());
        console.log("Order Status : " + childorder.child("status").val());

        // this.state.messages[i++] = message;
      });
    });

    for (let i = 0; i < 10; i++) {
      console.log("3. Test " + i);
    }

    // console.log(
    //   "1. Read data END" +
    //     test.then(() => {
    //       //console.log("inside promise" + messages);
    //       console.log("Before set" + this.state.messages[0].msgid);
    //       //this.setState();

    //       console.log("Afet set" + this.state.messages[8].msgTitle);
    //     })
    // );
    // return test;
  }

  handleChange = event => {
    console.log("Properoty : " + this.props.test);
    // this.props.test = "sfsdfs";
    // console.log("Properoty : " + this.props.test);
    console.log("Value : " + event.target.value);
    console.log("Value : " + event.target.name);
    // this.state.test1 = event.target.value;
    console.log("Value State : " + this.state.test1);
    this.setState({ [event.target.name]: event.target.value });

    console.log("Add Order Called : " + JSON.stringify(this.state));
  };

  handleAddOrder = event => {
    console.log("Add Order Called : " + JSON.stringify(this.state));
    this.addOrder();
  };

  handleListOrders = event => {
    console.log("Add Order Called");
    this.getOrders();
  };

  handleUpdateOrder = event => {
    console.log("Add Order Called");
    this.updateOrderDeliveryAddress();
  };

  handleSetOrder = event => {
    console.log("Add Order Called");
    this.setOrder();
  };

  handleDeleteOrder = event => {
    console.log("Add Order Called");
    this.deleteOrder();
  };

  render() {
    return (
      <div>
        <h1> Order Management {this.props.test}</h1>
        <h2>State Value {this.state.test1}</h2>
        <form>
          Order Id / Key :{" "}
          <input name="ord_id" type="text" onChange={this.handleChange} />{" "}
          <br />
          <br />
          Order Name :{" "}
          <input
            name="ord_name"
            type="text"
            onChange={this.handleChange}
          />{" "}
          <br />
          <br />
          Order Quantity :{" "}
          <input
            name="ord_quantity"
            type="text"
            onChange={this.handleChange}
          />{" "}
          <br />
          <br />
          Order Delivery Date :{" "}
          <input
            name="ord_del_date"
            type="text"
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
          Order Delivery Address :{" "}
          <input
            name="ord_del_address"
            type="text"
            onChange={this.handleChange}
          />{" "}
          <br /> <br />
          <button onClick={this.handleAddOrder}> Add Order</button>{" "}
          <button onClick={this.handleListOrders}> List Orders</button>
          <button onClick={this.handleUpdateOrder}> Update Order</button>
          <button onClick={this.handleSetOrder}> Set Order</button>
          <button onClick={this.handleDeleteOrder}> Delete Order</button>
        </form>
      </div>
    );
  }
}

export default OrderManagementComponent;
