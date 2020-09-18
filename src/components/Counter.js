import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps ", prevProps);
  //   console.log("prevState ", prevState);
  //   if (prevProps.counter.value !== this.props.counter.value) {
  //     // Ajax call and get new data from the server
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("Counter - Unmount");
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    // console.log("Counter - Rendered");
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    return (
      <div className="row">
        <div className="col-sm-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-sm-1">
          <button
            onClick={() => onIncrement(counter)} // passing a reference to the method, not calling it with '()'
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm"
            disabled={counter.noDecrement}
          >
            -
          </button>
        </div>
        <div className="col-sm-1">
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
