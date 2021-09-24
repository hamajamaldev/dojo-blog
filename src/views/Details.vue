<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  
      <span v-for="tag in post.tags" :key="tag">#{{tag}}&nbsp; </span>
    <button @click="handleClick" style="cursor:pointer">DElete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute, useRouter } from 'vue-router'

// component imports
import Spinner from '../components/Spinner.vue'
import { projectFirestore } from '../firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(route.params.id)

    load()

    const handleClick =async ()=>{
      await projectFirestore.collection('posts').doc(props.id).delete()
      router.push({name:'Home'})
    }

    return { error, post, handleClick }
  },
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>