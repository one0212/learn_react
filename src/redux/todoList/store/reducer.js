import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes';

const defaultState = {
  inputValue: "Write Something",
  list: ["早上10點上班, 搭捷運到松山", "到公司前先買早餐", "下午4點下班"]
};
export default (state = defaultState, action) => {
	console.log(state, action)
	// reducer裡只能接收state, 不能改變state
	if (action.type === CHANGE_INPUT) {
		// 深度拷貝
		let newState = state
		newState.inputValue = action.value
		return {...state, inputValue: action.value}
	}

	if (action.type === ADD_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}

	if (action.type === DELETE_ITEM) {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.splice(action.index, 1) 
		return newState
	}
  return state;
};
