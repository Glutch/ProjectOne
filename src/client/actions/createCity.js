export const createCity = ({name, population}) => {
  return dispatch => {

    const payload = {
      method: 'POST',
      body: JSON.stringify({ name, population }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://cities.jonkri.se/', payload)
      .then(res => res.json())
      .then(res => {
        const id = res.reverse()[0].id
        dispatch({ type: 'CREATE_CITY', city: { id, name, population } })
      })
  }
}