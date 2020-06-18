import React, { useState, useEffect, useMemo, useCallback } from 'react'


// const memoizedCallback = useCallback(
//   () => {
//     doSomething(a, b)
//   },
//   [a, b],
// )

function Foo({ bas, bar, baz }) {
  useEffect(() => {
    const options = { bas, bar, baz }
    console.log('Foo:', options)
  }, [bas, bar, baz])
  return <div>Foo</div>
}

function FooMemoized({ bas, bar, baz }) {
  useEffect(() => {
    const options = { bas, bar, baz }
    console.log('FooMemoized:', options)
  }, [bas, bar, baz])
  return <div>FooMemoized</div>
}

// useCallback 每次渲染，生成新的bar传入，造成bar与baz的引用每次不相等，Foo的useEffect每次都会调用。barMemoized与bazMemoized不重现执行，FooMemoized的useEffect不会再次调用。

export default function UseCallback() {
  const [count, setCount] = useState(0)

  const bas = 'i am bas'
  const bar = () => {} // 函数，每一次渲染都有一个“新版本”的bar
  const baz = [1, 2, 3] // 数组

  const barMemoized = useCallback(() => {}, [])
  const bazMemoized = useMemo(() => [1, 2, 3], [])

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        点我再次render
      </button>
      <Foo bas={bas} bar={bar} baz={baz} />
      <FooMemoized bas={bas} bar={barMemoized} baz={bazMemoized} />
    </div>
  )
}
