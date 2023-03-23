import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions";

function App({ count, incrementCounter, decrementCounter }) {
  return (
    <div>
      <h1>카운터:{count}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
}

/* https://react-redux.js.org/using-react-redux/connect-mapstate */
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

//connect 에는 dispatch 가 내장되어 있음
export default connect(mapStateToProps, { incrementCounter, decrementCounter })(
  App
);
//export default App;
