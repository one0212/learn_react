import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import { deleteItemAction } from '../todoList/store/actionCreators';

const store = createStore(
    // counterReducer, // 由rootReducer取代
    rootReducers,
    compose(
        applyMiddleware(...[thunk]), // 需要使用的中間健陣列
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store