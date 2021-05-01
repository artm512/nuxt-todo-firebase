import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// firestoreのDBを定義
const db = firebase.firestore()
const todosRef = db.collection('todos')

// stateを定義
export const state = () => ({
  todos: [],
})

// actionを定義
export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    // bindFirestoreRef(バインドしたいdataの名前, コレクションへの参照)
    // => バインドされる（関連付け）
    bindFirestoreRef('todos', todosRef)
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      todosRef.add({
        name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp(), // タスクが追加された時間（サーバー側）
      })
    }
  }),
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done,
    })
  }),
}
