import { createContext, useEffect, useState } from "react";
import { auth } from "../__firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const [user, SetUser] = useState(null);
    const [loader,SetLoader] = useState(true);
    const signInWithGoogle = (email,password) => signInWithEmailAndPassword(auth,email,password);
    const signUpWithGoogle = (email,password) => createUserWithEmailAndPassword(auth,email,password);
    
    const uploadImage = async (imageData) => { 
        const apiKey = import.meta.env.VITE_IMAGE;
        const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${apiKey}`;
        try{
            const response = await fetch(imageHostingUrl, {
                method: 'POST',
                body: imageData
            })
            return response.json();
        }catch(e){
            console.log(e);
        }
    }

    const authInfo = {
        user,
        uploadImage,
        loader,
        signInWithGoogle,
        signUpWithGoogle
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            SetUser(currentUser);
            console.log("Auth state changed, Current User is - ", currentUser);
            SetLoader(false);
        })

        //stop observing while unmounting
        return () => unsubscribe(); 
        
    },[]);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;