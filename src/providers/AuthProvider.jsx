import { createContext, useEffect, useState } from "react";
import { auth } from "../__firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const [user, SetUser] = useState(null);
    const [loader,SetLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = (email,password) => signInWithEmailAndPassword(auth,email,password);
    const signUpWithGoogle = (email,password) => createUserWithEmailAndPassword(auth,email,password);
    const signInWithGoogleAuthProvider = () => signInWithPopup(auth,googleProvider);
    const logout = () =>signOut(auth);

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
        signInWithGoogleAuthProvider,
        signUpWithGoogle,
        logout,
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            SetUser(currentUser);
            console.log("Auth state changed",currentUser?.email);
            SetLoader(false);

            if(currentUser){

                const email = {
                    email : currentUser.email
                }
                console.log(email);

                fetch('http://localhost:3000/jwt',{
                    method : 'POST',
                    headers : { 'Content-type' : 'application/json' },

                    body : JSON.stringify(email),
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data.token);
                    localStorage.setItem('phero-assignment-token',data.token);
                });

            }else{
                localStorage.removeItem('phero-assignment-token');
            }
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