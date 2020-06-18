import React, { useState, useCallback, useRef } from "react"

export default function CaptureValue() {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const handleAlertClick = useCallback(
    () => {
      setTimeout(() => {
        alert("You clicked on: " + count)
        // alert("You clicked on: " + countRef.current)
      }, 3000)
    },
    [count]
  )

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          // countRef.current = count + 1
          setCount(count + 1)
        }}
      >
        增加 count
      </button>
      <button onClick={handleAlertClick}>
        显示 count
      </button>
    </div>
  )
}
