/** @jsxRuntime classic */
/** @jsx React.createElement */
import React from "../FiberReact";
import ReactDOM from "../FiberReact/react-dom";

class Count4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  onClickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.onClickHandler}>Count+1</button>
      </div>
    );
  }
}

function Count3() {
  const [count, setCount] = React.useState({
    num: 1,
  });

  const onClickHandler = () => {
    setCount((prev) => ({
      num: prev.num * 2,
    }));
  };

  return (
    <div>
      <h3>Count: {count.num}</h3>
      <button onClick={onClickHandler}>Count * 2</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = React.useState({ num: 0 });
  const [count2, setCount2] = React.useState({ num: 0 });

  const onClickHandler = () => {
    setCount((prev) => ({
      num: prev.num + 1,
    }));
  };

  const onClickHandler2 = () => {
    setCount2((prev) => ({
      num: prev.num + 2,
    }));
  };

  return (
    <div>
      <h3>Count1: {count.num}</h3>
      <button onClick={onClickHandler}>Count1+1</button>
      <h3>Count2: {count2.num}</h3>
      <button onClick={onClickHandler2}>Count2+2</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <h1 id="title">{props.title}</h1>
      <hr></hr>
      <section>
        <h2>Function component 1</h2>
        <Count></Count>
        <hr></hr>
        <h2>Function component2</h2>
        <Count3></Count3>
        <hr></hr>
        <h2>Class component</h2>
        <Count4></Count4>
      </section>
    </div>
  );
}

ReactDOM.render(<App title="Fiber Demo" />, document.getElementById("root"));
