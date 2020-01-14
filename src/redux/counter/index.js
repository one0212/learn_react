import React, { Component } from 'react';
import { createStore } from 'redux';


const counterReducer = function (state = { count: 1 }, action) {
  console.log(action)
  switch(action.type) {
    case 'COUNT_ADD':
      return {
        ...state, count: state.count + 1
      }
    case 'COUNT_REDUCE':
      return {
        ...state, count: state.count - 3
      }
    default:
      return state
  }

}

// 建立一個store
const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

console.log(store)
console.log(store.getState())

 // 用於修改counter的值
 store.dispatch({
  type: "COUNT_ADD",
  payload: {},  
})

console.log(store)
console.log(store.getState())

store.dispatch({
  type: "COUNT_REDUCE",
  payload: {},  
})

console.log(store)
console.log(store.getState())


class Counter extends Component {

  //  如果要改變一個reducer的值 需要使用dispatch派發一個action
  //  action需要兩個參數
  //  type  通過type區分是對state做什麼操作
  //  payload  傳遞的數據
  render() {
    return(
     <></>
    )  
  }
}
  
  
export default Counter