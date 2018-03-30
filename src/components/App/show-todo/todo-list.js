import React, {Component} from 'react'
import _ from 'lodash'

export default class TodoList extends Component {

  render() {
    return (
      <ul>
        { _.map(this.props.todos, (item, i) =>
          <li className="list__item-todo" key={i}>{item.name}</li>)
        }
      </ul>
    )
  }
}