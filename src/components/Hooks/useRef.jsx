import React, { useRef } from "react"

export default function UseRef() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    console.log(inputEl.current)
    inputEl.current.focus()
    // const obj = {a: '123'}
    // console.log(obj?.a)
  }

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}
