import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';


// export authContext

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

     const [user, setUser] = useState();

     // set loading 
     const [loading, setLoading] = useState(true)

     
     // create account with email and password - email and password as a params
     const createAccountWithEmail =(email, password)=>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     };

     const lgoinAccountWithEmail = (email, password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     };

     const createUserWithGoogle = (provider)=>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const createUserWithGithub = (provider)=>{
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     const logOutAccount = ()=>{
          setLoading(true)
          return signOut(auth);
     }


     // tracked current user 
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (currentUser => {
               setUser(currentUser)
               setLoading(false)
          }))
          return ()=>{
               unsubscribe()
          }
     },[])
     

     const authInfo = {
          createAccountWithEmail,
          lgoinAccountWithEmail,
          logOutAccount,
          user,
          setLoading,
          loading,
          createUserWithGoogle,
          createUserWithGithub
     }

     return (
          <div>
               <AuthContext.Provider value={authInfo}> 
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;