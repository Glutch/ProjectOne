const cities = (state = [], action) => {
  switch(action.type){
    case 'FETCH_CITIES':
      return action.cities

    case 'REMOVE_CITY':
      return state.filter(city => city.id !== action.city.id)

    case 'CREATE_CITY':
      return [
        ...state,
        action.city
      ]

    default:
      return state
  }
}

export default cities