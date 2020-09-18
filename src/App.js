import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super();
    // console.log("App - Constructor");
    this.counters = this.setDecrementButton([...this.state.counters]);
  }

  // componentDidMount() {
  //   // Do Ajax Calls here
  //   console.log("App - Mounted");
  // }

  setDecrementButton(counters) {
    counters.forEach((counter) => {
      counter.noDecrement = counter.value > 0 ? false : true;
    });
    return counters;
  }

  // an arrow function inherits the 'this' of the object
  handleIncrement = (counter) => {
    this.updateValue(counter, true);
  };

  handleDecrement = (counter) => {
    this.updateValue(counter, false);
  };

  updateValue = (counter, add) => {
    let counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    add ? counters[index].value++ : counters[index].value--;
    counters = this.setDecrementButton(counters);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    counters = this.setDecrementButton(counters);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    // console.log("App - Rendered");
    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
