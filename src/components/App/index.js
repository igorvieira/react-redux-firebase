import React, { Component } from 'react';
import SectionList from './section-list'
import { connect } from 'react-redux'
import { loadSections, createSection, loadSpecificSection } from 'actions/todo'
import './assets/list.css'

class App extends Component {
  componentDidMount() {
    this.props.loadSections()
  }

  onSubmit = (e) => {
    e.preventDefault()
    let ref = this.refs['section-name']
    let sectionName = ref.value
    this.props.createSection(sectionName)
    ref.value = ''
  }

  onSectionClick = (sectionId) => {
    this.props.loadSpecificSection(sectionId)
  }

  render() {
    return (
      <div>
        <SectionList
          sections={this.props.sections}
          onClick={this.onSectionClick}
        />
        <form className="list__form" onSubmit={this.onSubmit}>
          <input
            placeholder="Add a new section..."
            className="list__input"
            ref="section-name"/>
          <button
            className="list__button">
            Add new section
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sections: state.todo.sections
  }
}

export default connect(mapStateToProps, {loadSections, createSection, loadSpecificSection})(App)