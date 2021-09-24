import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      projectFirestore.collection('posts')
      .orderBy('createdAt', 'desc')  
      .onSnapshot(snap => {
        console.log('snapshot: ', snap)
        let docs = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        console.log('documents: ', docs)
        posts.value = docs
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts