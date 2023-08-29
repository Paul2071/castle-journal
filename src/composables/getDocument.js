import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {

  const singleDocument = ref(null)
  const error = ref(null)

  // register the firestore collection reference
  let singleDocumentRef = projectFirestore.collection(collection).doc(id)
 

  const unsub = singleDocumentRef.onSnapshot(doc => {
    
    if(doc.data()) {
        singleDocument.value = { ...doc.data(), id: doc.id}
        error.value = null
    } else {
        error.value = 'couldnt find that entry'
    }

    
  }, err => {
    console.log(err.message)
    error.value = 'could not fetch the data'
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, singleDocument }
}

export default getDocument