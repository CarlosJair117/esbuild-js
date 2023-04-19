import React from 'react'

const App = (props: {message:string}) => {
  return (
    <>
        <h1>{props.message}</h1>
        <h2>Count:</h2>
        <button>Increment</button>
    </>
  )
}

export default App