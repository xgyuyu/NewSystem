
import React, { useState, useEffect } from 'react'

function UseEffect() {
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log('执行')
    document.title = `You clicked ${count} times`
  }, [count])//

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default UseEffect
