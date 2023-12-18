const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  } else {
    return {
      counter: state.counter + 1,
    };
  }
};

const stroe = redux.createStore(counterReducer);

console.log(stroe.getState());

const counterSubscriber = () => {
  const latestState = stroe.getState();
  console.log(latestState);
};

stroe.subscribe(counterSubscriber);

// stroe.dispatch({type: 'increment'})

for (let i = 0; i < 4; i++) {
  stroe.dispatch({ type: "increment" });
}

for (let i = 0; i < 4; i++) {
  stroe.dispatch({ type: "decrement" });
}
