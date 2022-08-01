import React from 'react';
import '../Stylesheet/PopupBox.css';
import Cookies from 'universal-cookie';
import firestore, { app } from "../firebase.config";
import {doc,getDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
const PopupBox = (props) => {
    // const navigate = useNavigate();
    const checkData= async ()=>
         {
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const docRef = doc(firestore, name, props.title);
        const dkey=document.getElementById('dkey').value;
        const docSnap = await getDoc(docRef);
        const linkref=document.getElementById('decryptlink').style;
        linkref.pointerEvents="none";
        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            // console.log(docSnap.data().key==dkey);
            if(dkey==docSnap.data().key)
            {
            // props.navigate(`/notepage/?noteid=${props.title}`);
            linkref.pointerEvents="auto";
            console.log("🤦‍♂️");
            return;
            }  
        } else {
            console.log("No such document!");
        }
        linkref.pointerEvents="none";
         }
    return (
         
        <div className='PopupmainDiv'>
            <div className='PopBox'>
                <div className='PBCloseDiv' onClick={()=>
                {
                    props.setPopup(false);
                    const square =document.getElementById("DBMainDiv");
                    square.style.filter = "none";
                    square.style.height = "auto";
                    square.style.overflow = "auto";
                    square.style.pointerEvents="auto";                    
                }}>
                    <span>X</span>
                </div>
                <div className='PopBoxContent'>
                    <div className='PopupTitle'>
                        <span>Enter the Decryption Key</span>
                    </div>
                    <input id='dkey' className='PopupInput' onChange={()=>{
                            checkData();
                             }}></input>
               
                        <Link to={{pathname:`/notepage/?noteid=${props.title}`}} id='decryptlink'>
                            <div className='SubmitButton'>
                                <span>submit</span>
                            </div>
                        </Link>
                </div>
            </div>
        </div>
     );
}
 
export default PopupBox;