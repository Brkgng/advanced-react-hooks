// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

const CountProvider = ({children}) => {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]

  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useCount = () => {
  const value = React.useContext(CountContext)

  if (!value) {
    throw new Error('CountContext must be use in <CountProvider>')
  }
  return value
}

function CountDisplay() {
  const count = useCount()[0]
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const setCount = useCount()[1]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
