import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
