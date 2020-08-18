import React, { useState } from "react"

function Counter() {
  let initialCount = 10
  const [count, setCount] = useState(initialCount)
  console.log(count, '值')

  return (
    <div>
      当前数字: {count}
      <button onClick={() => setCount(initialCount)}>重置</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => {
        setCount(count + 1)
        console.log(count)
      }}>+123</button>
    </div>
  )
}
export default Counter
