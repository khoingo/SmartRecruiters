import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

export default class RedditApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div />
      </Provider>
    )
  }
}