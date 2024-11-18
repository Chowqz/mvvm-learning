/** @jsxRuntime classic */
/** @jsx React.createElement */
import React from "../MiniReact/fiber";

const ReactDOM = React;

class Count2 extends React.Component {
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

// export的时候用transfer包装下
const Count4 = React.transfer(Count2);

function Count3() {
  const [count, setCount] = React.useState(1);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={onClickHandler}>Count+1</button>
    </div>
  );
}

function Count() {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(1);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  const onClickHandler2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h3>Count1: {count}</h3>
      <button onClick={onClickHandler}>Count1+1</button>
      <h3>Count2: {count2}</h3>
      <button onClick={onClickHandler2}>Count2+1</button>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <h1 id="title">{props.title}</h1>
      <hr></hr>
      <section>
        <h2>函数组件1</h2>
        <Count></Count>
        <hr></hr>
        <h2>函数组件2</h2>
        <Count3></Count3>
        <hr></hr>
        <h2>Class组件</h2>
        <Count4></Count4>
      </section>
    </div>
  );
}

ReactDOM.render(<App title="Fiber Demo" />, document.getElementById("root"));
