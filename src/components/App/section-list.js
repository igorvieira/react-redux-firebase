import React, {Component} from 'react'
import _ from 'lodash'

export default class SectionList extends Component {

  render() {
    return (
      <div className="list">
        { _.map(this.props.sections, (section, i) => 
          <div
            className="list__item"
            onClick={ this.props.onClick.bind(this, section.id)} key={i}>
            - {section.name}
          </div>
          )
        }
      </div>
    )
  }
}