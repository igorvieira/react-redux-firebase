import _ from 'lodash'
import actionType from 'constants'

let initialState = {
  sections: []
}

export default (state = initialState, action) => {
  let newState = _.merge({}, state)
  switch(action.type) {
    case actionType.LOAD_SECTIONS_SUCCESS:
      newState.sections = action.payload
      return newState
    default:
      return state
  }
}

export const getSectionById = (state, sectionId) => {
  return state.sections[sectionId] || {}
}
