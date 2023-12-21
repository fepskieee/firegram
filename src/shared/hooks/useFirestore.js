import { database } from '@firebase/config';

import {
  collection,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';
import { useState, useEffect } from "react";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const docCollection = collection(database, collectionName);
    const queryBy = query(docCollection, orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(queryBy, (snap) => {
      const documents = snap.docs.map(doc => ({...doc.data(), id: doc.id }))

      setDocs(documents);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default useFirestore