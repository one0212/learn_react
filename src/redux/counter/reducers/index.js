import { combineReducers } from 'redux';
import counterReducer from './counter_reducer';
import postReducer from './post_reducer';

// 通過combineReducer
const rootReducers = combineReducers({
    counter: counterReducer,
    post: postReducer
})

export default rootReducers
