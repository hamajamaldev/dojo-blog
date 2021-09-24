import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD57TckQ2fdlpXC54WIlyWWuEBUCrobjDw",
  authDomain: "vue-blog-5790b.firebaseapp.com",
  projectId: "vue-blog-5790b",
  storageBucket: "vue-blog-5790b.appspot.com",
  messagingSenderId: "127935708391",
  appId: "1:127935708391:web:1f9c35b31bcdf84e51b642"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore ,timestamp}
