import  { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)

    const load = async () => {

        try {
            const response = await projectFirestore.collection('posts').get()
                console.log(response)
            
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)


        }

    }

    return { posts, error, load }
}

export default getPosts