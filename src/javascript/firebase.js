import * as firebase from 'firebase'
import sectionModel from './models/section'
import todoModel from './models/todo'
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
} from './config'


let database

export const init = () => {
  
  let config = {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  }

  firebase.initializeApp(config)
  database = firebase.database()
}

export const getSectionsDB = () => {
  return database.ref('/').once('value')
}

export const getTodoDB = (sectionId) => {
  return database.ref(`/${sectionId}`).once('value')
}

export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+key).set(model)
}

export const addTodoItem = (id, name) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${id}`)
            .once('value')
            .then((todo) => {
              let todos = todo.val().todos || []
              let key = database.ref(`/${id}`).push().key

              todos.push(todoModel(key, name, firebase.database.ServerValue.TIMESTAMP))
              database.ref(`/${id}/todos`).set(todos)
                .then( res => {resolve(res)})
                .catch( error => {reject(error)})
            })
          })
}
