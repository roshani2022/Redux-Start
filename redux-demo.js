const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === " INCREMENTBY2") {
    return { counter: state.counter + 2 };
  }
  
  if (action.type === "DECREMENTBY2") {
    return { counter: state.counter - 2 };
  }

  return state;
};

const stroe = redux.createStore(counterReducer);

console.log(stroe.getState());

const counterSubscriber = () => {
  const latestState = stroe.getState();
  console.log(latestState);
};

stroe.subscribe(counterSubscriber);

stroe.dispatch({ type: "INCREMENTBY2" });

stroe.dispatch({ type: "DECREMENTBY2" });

