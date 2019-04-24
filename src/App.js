import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import NotFound from "./pages/NotFound";
import Modal from "./components/Modal";
import Details from "./pages/Details";
import ProductList from "./pages/ProductList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
