// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  const {count} = state
  const {type, step} = action

  switch (type) {
    case 'INCREMENT':
      return {count: count + step}
    case 'DECREMENT':
      return {count: count - step}
    case 'RESET':
      return {count: 0}
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  const decrement = () => dispatch({type: 'DECREMENT', step})
  const reset = () => dispatch({type: 'RESET', step})

  return (
    <div>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>{count}</button>
      <button onClick={reset}>{count}</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
