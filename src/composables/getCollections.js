import { ref, watchEffect } from 'vue'
import { projectFirestore } from '@/firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref (null)

    //register firebase collection ref
    let collectionRef = projectFirestore.collection(collection)
    .orderBy('createdAt')



}