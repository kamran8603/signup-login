import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../src/Firebase';
 
const Setup = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const uid = user.uid;
            
              console.log("uid", uid)
            } else {
              
             
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
      …
    </section>
  )
}
 
export default Setup;