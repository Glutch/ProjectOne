const general = (state = [], action) => {
  switch(action.type){
    case 'FETCH_SOMETHING':
      return [...state, Object.assign({}, action.something)]

    default:
      return state
  }
}

export default general