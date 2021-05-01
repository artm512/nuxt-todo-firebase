import firebase from 'firebase'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
}

// 二重初期化を防止
if (!firebase.apps.length) {
  // firebaseの初期化
  firebase.initializeApp(config)
}

export default firebase
