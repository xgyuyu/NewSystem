import React, { useState, useMemo, memo } from "react"

//const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

export default function UseMemo() {
  const [count1, changeCount1] = useState(0)
  const [count2, changeCount2] = useState(10)

  // 返回一个数字，只在count1改变时，计算新的值
  const calculateCount = useMemo(() => {
    console.log('重新生成计算结果')
    return count1 * 10
  }, [count1])

  // 返回一个组件，只在count2改变时，重新挂载组件
  const componentRefine = useMemo(() => {
    console.log('重新生成组件')
    return <Child count={count2} />
  }, [count2])

  return (
    <div>
      {calculateCount}
      {componentRefine}
      <button onClick={() => { changeCount1(count1 + 1) }}>改变count1</button>
      <button onClick={() => { changeCount2(count2 + 1) }}>改变count2</button>
    </div>
  )
}

const Child = memo(function Child(props) {
  console.log('Child render')
  return <h1>value:{props.count}</h1>
})
