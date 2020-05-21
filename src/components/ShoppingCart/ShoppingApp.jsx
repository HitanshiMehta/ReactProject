import React from "react";
import Counters from "./Counters.jsx";
import NavBar from "./NavBar.jsx";

class ShoppingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 0 },
        { id: 1, value: 1 },
        { id: 2, value: 0 },
        { id: 3, value: 3 },
      ],
    };
  }
  handleRest = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters,
    });
  };
  handleDelete = (id) => {
    this.setState({
      counters: this.state.counters.filter((c) => c.id !== id),
    });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters,
    });
  };
  render() {
    return (
      <>
        <NavBar
          totalItem={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleRest}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

export default ShoppingApp;
