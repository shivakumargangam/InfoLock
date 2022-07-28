import React from 'react';
import '../Stylesheet/PopupBox.css';
import {Link} from "react-router-dom";
import Cookies from 'universal-cookie';
import firestore, { app } from "../firebase.config";
import {doc,setDoc,collection,getDoc,deleteDoc} from "firebase/firestore";
const PopupBox = (props) => {
    console.log(props.title);
    const checkData= async ()=>
         {
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const docRef = doc(firestore, name, props.title);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
         }
    return (
         
        <div className='PopupmainDiv'>
            <div className='PopBox'>
                <div className='PopupTitle'>
                    <span>Enter the Decryption Key</span>
                </div>
                <input className='PopupInput'></input>
               
                    <div className='SubmitButton' onClick={()=>{

                    }}>
                        <span>submit</span>
                    </div>

            </div>
        </div>
     );
}
 
export default PopupBox;