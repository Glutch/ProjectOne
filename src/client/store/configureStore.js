import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const configureStore = initialState => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )
}

export default configureStore