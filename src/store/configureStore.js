import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from '../enhancers/monitorReducer';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}