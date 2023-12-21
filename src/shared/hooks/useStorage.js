import { STATUS } from '@utils/enums/enums';
import { storage, database } from '@firebase/config';
import { getServerTimestamp } from '@utils/helpers/helpers';

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'

const [pending, onGoing, done, error] = STATUS;
const initialUpload = { progress: 0, status: pending, url: "" };

const useStorage = (file) => {
  const [result, setResult] = useState(initialUpload);
  // [ ] Add img url to firestore
  
  useEffect(() => {
    // 
    const imagesRef = ref(storage, `images/${file.name}`);
    const collectionRef = collection(database, 'images');
    const uploadTask = uploadBytesResumable(imagesRef, file)
    
    const unsubscribe = file && uploadTask.on('state_changed',
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setResult(prevState => ({
          ...prevState,
          progress: percentage,
          status: onGoing
        }));
      },
      (err) => {
        setResult({
          ...initialUpload,
          status: err || error
        });
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
        .then(downloadURL => {
          const createdAt = getServerTimestamp();
          const url = downloadURL;

          addDoc(collectionRef, {
            url,
            createdAt,
          })

          setResult(prevState => ({
            ...prevState,
            status: done,
            url
          }));
        });
      }
    );
    
    return () => { unsubscribe() }
  }, [file]);
  
  return result;
}

export default useStorage;
