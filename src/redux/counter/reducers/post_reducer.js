const postReducer = (state = { list: [ {title: 'Hello'} ] }, action) => {
    switch(action.type) {
      case 'LOAD_POSTS':
        return {
          ...state, list: action.payload
        }
      default: 
        return state
    }
  }

  export default postReducer