import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import Routes from './routes'
import { init as firebaseInit } from 'javascript/firebase'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { syncHistoryWithStore } from 'react-router-redux'

export default class Root extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
    this.store = configureStore(browserHistory)
  }
  render() {
    return (
      <Provider store={this.store}>
        <Routes history={syncHistoryWithStore(browserHistory, this.store)}/>
      </Provider>
    )
  }
}