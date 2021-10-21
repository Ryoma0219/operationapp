import React, { useReducer } from "react";

type TAction = {
  type: 'increment' | 'decrement'
  payload: any
}

type TState = {
  count: number
}

import styles from '../styles/Home.module.css'

const Reducer = () => {
  const initialState = {count: 0};
  
  const reducer = (state: TState, action: TAction) => {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>
          Simple reducer
        </h1>
        <code className={styles.code}>
          Count: {state.count}
        </code>
        <div>
          <button onClick={() => dispatch({
            type: 'decrement',
            payload: null
          })}>-</button>
          <button onClick={() => dispatch({type: 'increment', payload: null})}>+</button>
        </div>
      </main>
    </div>
  );
}

export default Reducer
