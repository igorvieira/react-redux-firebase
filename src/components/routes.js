import {Router, Route, IndexRoute, Redirect} from 'react-router'
import App from './App'
import React, {Component} from 'react'
import ShowTodo from './App/show-todo'
import {connect} from 'react-redux'
import {loadSections} from '../actions/todo'
import './App/assets/normalize.min.css'
import './App/assets/style.css'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.props.loadSections()
  }
  render() {
    return (
      <div className="todo">
        <a href="/">
          <h1 className="todo__title">
            Hey Human =]
          </h1>
        </a>
        <Router {...this.props}>
          <Route path='/'>
            <IndexRoute component={App} />
            <Route path=':id' component={ShowTodo}/>
          </Route>
        </Router>
      </div>
    )
  }
}
export default connect(null, {loadSections})(Routes)