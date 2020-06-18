type Hooks = {
  memoizedState: any, // 指向当前渲染节点 Fiber
  baseState: any, // 初始化 initialState， 已经每次 dispatch 之后 newState
  baseUpdate: Update<any> | null,// 当前需要更新的 Update ，每次更新完之后，会赋值上一个 update，方便 react 在渲染错误的边缘，数据回溯
  queue: UpdateQueue<any> | null,// UpdateQueue 通过
  next: Hook | null, // link 到下一个 hooks，通过 next 串联每一 hooks
}



//在第一次mount阶段时
function mountWorkInProgressHook(): Hook {
  const hook: Hook = {
    // hooks的当前值 对于useState来说就是最新的值
    // 对于useEffect等副作用函数就是一个链表，保存的是一个个effect对象
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    // 用于useState进行更新数据的queue单向新欢链表，里面保存的是每一次setXXX的updateAction对象
    queue: null,
    // 指向下一个hooks
    next: null,
  }

  if (workInProgressHook === null) {
    // This is the first hook in the list
    // hook链表是保存在fiberNode的memoizedState属性上的
    // 第一个hook当做表头
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook
  } else {
    // Append to the end of the list
    // 因为memoizedState保留的是workInProgressHook的引用 所以这里.next其实是设置memoizedState的链表
    // 最后返回的workInProgressHook为当前创建的hook对象
    workInProgressHook = workInProgressHook.next = hook
  }
  return workInProgressHook
}



//首次render时执行mountState
function mountState(initialState) {
  // 从当前Fiber生成一个新的hook对象，将此hook挂载到Fiber的hook链尾，并返回这个hook
  var hook = mountWorkInProgressHook()

  hook.memoizedState = hook.baseState = initialState

  var queue = hook.queue = {
    last: null,
    dispatch: null,
    lastRenderedReducer: (state, action) => isFn(state) ? action(state) : action,
    lastRenderedState: initialState
  }
  // currentlyRenderingFiber$1保存当前正在渲染的Fiber节点
  // 将返回的dispatch和调用hook的节点建立起了连接，同时在dispatch里边可以访问queue对象
  var dispatch = queue.dispatch = dispatchAction.bind(null, currentlyRenderingFiber$1, queue)
  return [hook.memoizedState, dispatch]
}




//updateState阶段
function updateWorkInProgressHook() {
  let nextCurrentHook: null | Hook
  // 当前hook链表为空 那么久直接拿fiberNode上的memoizedState属性
  if (currentHook === null) {
    // 获取fiberNode节点
    let current = currentlyRenderingFiber.alternate
    if (current !== null) {
      nextCurrentHook = current.memoizedState
    } else {
      nextCurrentHook = null
    }
  } else {
    // 不为空 那么下一个hook就是 currentHook.next的下一个hook
    nextCurrentHook = currentHook.next
  }


  currentHook = nextCurrentHook

  // 创建一个新的hooks链表 结构
  const newHook: Hook = {
    memoizedState: currentHook.memoizedState,

    baseState: currentHook.baseState,
    baseQueue: currentHook.baseQueue,
    queue: currentHook.queue,

    next: null,
  }
  if (workInProgressHook === null) {
    // This is the first hook in the list.
    // 老的hooks对象直接抛弃 解构一个新的hooks对象返回给当前的memoizedState上 不复用之前的hooks对象了
    currentlyRenderingFiber.memoizedState = workInProgressHook = newHook
  } else {
    // Append to the end of the list.
    workInProgressHook = workInProgressHook.next = newHook
  }
  return workInProgressHook
}




function updateReducer(reducer, initialArg, init) {
  const hook = updateWorkInProgressHook()
  const queue = hook.queue

  // 拿到更新列表的表头
  const last = queue.last

  // 获取最早的那个update对象
  first = last !== null ? last.next : null

  if (first !== null) {
    let newState
    let update = first
    do {
      // 执行每一次更新，去更新状态
      const action = update.action
      newState = reducer(newState, action)
      update = update.next
    } while (update !== null && update !== first)

    hook.memoizedState = newState
  }
  const dispatch = queue.dispatch
  // 返回最新的状态和修改状态的方法
  return [hook.memoizedState, dispatch]
}
