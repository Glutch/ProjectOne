export const fetchCities = () => {
  return dispatch =>
    fetch('http://cities.jonkri.se/')
      .then(res => res.json())
      .then(cities =>
        dispatch({ type: 'FETCH_CITIES', cities })
      )
}