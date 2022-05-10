import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore } from 'firebase/firestore';
import { onSnapshot, collection, addDoc, serverTimestamp, orderBy, query } from 'firebase/firestore';
import { app } from './firebaseConfig';
import { dbPropTypes, msgTypes, ctxTypes } from './types';

const db = getFirestore(app);

const ctx = createContext<ctxTypes | null>(null);
export const useDb = () => useContext(ctx);

const user = Math.random().toFixed(5);

const DbProvider: React.FC<dbPropTypes> = ({ children }) => {
  const [messages, setMessages] = useState<msgTypes[] | []>([]);

  useEffect(() => {
    const q = query(collection(db, 'room'), orderBy('created', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as msgTypes[]);
    });
    return unsub;
  }, []);

  const sendMsg = async (msg: string) => {
    await addDoc(collection(db, 'room'), { msg: msg, user, created: serverTimestamp() });
  };

  const value: ctxTypes = { messages, sendMsg, user };

  return <ctx.Provider value ={value}>{children}</ctx.Provider>;
};

export default DbProvider;
