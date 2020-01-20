import React, { Component } from 'react';
// 使用多個reducer要用到 combineReducers
// 要使用middleware需加入compose, applyMiddleware
// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

// import { get } from 'axios';

// import thunk from 'redux-thunk';
// redux中要使用異步操作 就要使用middleware
// redux-thunk 可以發送一個異步請求
import store from './store';

// const counterReducer = function (state = { count: 1 }, action) {
//   console.log(action)
//   switch(action.type) {
//     case 'COUNT_ADD':
//       return {
//         ...state, count: state.count + 1
//       }
//     case 'COUNT_REDUCE':
//       return {
//         ...state, count: state.count - 3
//       }
//     default:
//       return state
//   }

// }

// const postReducer = function(state = { list: [ {title: 'Hello'} ] }, action) {
//   switch(action.type) {
//     case 'LOAD_POSTS':
//       return {
//         ...state, list: action.payload
//       }
//     default: 
//       return state
//   }
// }

// // 通過combineReducer
// const rootReducers = combineReducers({
//   counter: counterReducer,
//   post: postReducer
// })

// 建立一個store
// const store = createStore(
//   // counterReducer, // 由rootReducer取代
//   rootReducers,
//   compose(
//     applyMiddleware(...[thunk]), // 需要使用的中間健陣列
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

// console.log(store)
// console.log(store.getState())

// //  如果要改變一個reducer的值 需要使用dispatch派發一個action
// //  action需要兩個參數
// //  type  通過type區分是對state做什麼操作
// //  payload  傳遞的數據
// // 用於修改counter的值

//  store.dispatch({
//   type: "COUNT_ADD",
//   payload: {},  
// })

// console.log(store)
// console.log(store.getState())

// store.dispatch({
//   type: "COUNT_REDUCE",
//   payload: {},  
// })

// console.log(store)
// console.log(store.getState())

// const getPostRequest = () => {
//   return get('https://jsonplaceholder.typicode.com/posts')
// }

// // 使用thunk後 所有action中就會有dispatch參數
// store.dispatch(async function(dispatch) {
//   const res = await getPostRequest()
//   console.log(res.data)
//   dispatch({
//     type: 'LOAD_POSTS',
//     payload: res.data
//   })
// })

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