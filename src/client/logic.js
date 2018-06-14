import { fetchCities } from './actions/fetchCities'
import { createCity } from './actions/createCity'

export const runLogic = store => {
  store.dispatch(fetchCities())
  //store.dispatch(createCity({name: 'Göteborg', population: 2000}))
}