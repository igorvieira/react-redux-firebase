import { getSectionsDB, addSection, addTodoItem } from '../javascript/firebase'
import actionType from 'constants'
import { push } from 'react-router-redux'

export const loadSections = () => {
 return dispatch => {
  dispatch({
   type: actionType.LOAD_SECTIONS_REQUEST
  })
  getSectionsDB()
   .then(sections => {
    dispatch({
     type: actionType.LOAD_SECTIONS_SUCCESS,
     payload: sections.val()
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.LOAD_SECTIONS_FAILED,
     payload: error
    })
   })
 }
}

export const createSection = (name) => {
 return dispatch => {
  dispatch({
   type: actionType.ADD_SECTION_REQUEST
  })
  addSection(name)
   .then(res => {
    loadSections()(dispatch) //refresh the data to keep up-to-date
    dispatch({
     type: actionType.ADD_SECTION_SUCCESS
    })
   })
   .catch(error => {
    dispatch({
     type: actionType.ADD_SECTION_FAILED,
     payload: error
    })
   })
 }
}

export const createTodoItem = (sectionId, name) => {
  return (dispatch) => {
    dispatch({
      type: actionType.CREATE_TODO_REQUEST
    })
    addTodoItem(sectionId, name)
      .then(res => {
        loadSections()(dispatch)
        dispatch({
          type: actionType.CREATE_TODO_SUCCESS,
          payload: res
        })
      })
      .catch(error => {
        dispatch({
          type: actionType.CREATE_TODO_FAILED,
          payload: error
        })
      })
   }
}

export const loadSpecificSection = (sectionId) => {
  return (dispatch) => {
    dispatch(push(`/${sectionId}`))
  }
}