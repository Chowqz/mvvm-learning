/** @jsxRuntime classic */
/** @jsx React.createElement */
import React from "../FiberReact";
import ReactDOM from "../FiberReact/react-dom";

function Box(props) {
  return (
    <div>
      {props.label}
      {props.value}
    </div>
  );
}

class CountClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onClickHandler = () => {
    this.setState({
      count: this.state.count + 2,
    });
  };

  render() {
    return (
      <div>
        Count Class
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.onClickHandler}>Count+2</button>
      </div>
    );
  }
}

function CountFunction() {
  const [count, setCount] = React.useState({ num: 0 });
  const [boxList, setBoxList] = React.useState({ value: [] });

  const onClickHandler = () => {
    setCount((prev) => ({
      num: prev.num + 1,
    }));
    setBoxList((prev) => {
      prev.value.push(count.num + 1);
      return {
        value: [...prev.value],
      };
    });
  };

  return (
    <div>
      Count Function
      <h3>Count: {count.num}</h3>
      <button onClick={onClickHandler}>Count+1</button>
      {boxList.value.map((item, index) => {
        return <Box key={index} label="Box:" value={index + 1} />;
      })}
    </div>
  );
}

function App(props) {
  return (
    <div>
      <h1 id="title">{props.title}</h1>
      <hr></hr>
      <CountClass />
      <br />
      <hr />
      <CountFunction />
    </div>
  );
}

ReactDOM.render(<App title="Fiber" />, document.getElementById("root"));
