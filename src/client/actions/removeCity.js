export const removeCity = city => {
  return dispatch => {
    dispatch({ type: 'REMOVE_CITY', city })
    fetch(`http://cities.jonkri.se/${city.id}`, {
      method: 'DELETE'
    })
  }
}