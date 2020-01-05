const defaultState = {
  inputValue: "Write Something",
  list: ["早上10點上班, 搭捷運到松山", "到公司前先買早餐", "下午4點下班"]
};
export default (state = defaultState, action) => {
	// console.log(state, action)
	// reducer裡只能接收state, 不能改變state
	if (action.type === 'changeInput') {
		// 深度拷貝
		let newState = JSON.parse(JSON.stringify(state))
		newState.inputValue = action.value
		return newState
	}

	if (action.type === 'addItem') {
		let newState = JSON.parse(JSON.stringify(state))
		newState.list.push(newState.inputValue)
		newState.inputValue = ''
		return newState
	}
  return state;
};
