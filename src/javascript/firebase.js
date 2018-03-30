import * as firebase from 'firebase'
import sectionModel from './models/section'
import todoModel from './models/todo'

let database

export const init = () => {
  
  let config = {
    apiKey: "AIzaSyBY-eZPJrb8Ws_jc1pWCfEhNhF4VzdgC-Q",
    authDomain: "to-do-list-7eabf.firebaseapp.com",
    databaseURL: "https://to-do-list-7eabf.firebaseio.com",
    projectId: "to-do-list-7eabf",
    storageBucket: "to-do-list-7eabf.appspot.com",
    messagingSenderId: "893610260697"
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
