import React from 'react';
import '../Stylesheet/NotePageBody.css';
import Cross from '../media/CrossSymbol.svg';
import {useState} from 'react';
// import colref from "../firebase.config";
import firestore from "../firebase.config";
import {addDoc, collection, doc,setDoc, updateDoc } from "firebase/firestore";
import Cookies from 'universal-cookie';
const NotePageBody = () =>{
    const [message, setMessage] = useState('');
    const handleMessageChange = event => {
        setMessage(event.target.value);
      };

    var changed=false;
    const exit= ()=>{
        console.log(changed);
        if(changed)
        {
            if(window.confirm("Do you wish to save changes"))
            {
                console.log("save to db");
                changed=false;
            }
            else
            {
                console.log("discard");
            }
        }
    }
    const save= async()=>{
        const title = document.getElementById("title").value;
        const msg=message;
        console.log(title);
        console.log(msg);
        // try{
            const data={
                date:`${Date.now()}`,
                title:title,    
                message: msg,
                key:"key",
            }
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const collectionref =collection(firestore,name);
        addDoc(collectionref,data).then(()=>{
            console.log("data Added");
        });
    }

    return (
        <div className='Body'>
               <div className='Title'>
                    <input onInputCapture={()=>{changed=true}} id="title" type="text" class="TitleDiv"  placeholder="Title" data-text="Please enter a Title."></input>
                    <img src={Cross} alt="cross" onClick={exit}/>
                </div>
                <div className='NPBlinecenter'>
                    <div className='NPBline'></div>
                </div>
                <div className='Content'>
                    <textarea  value={message} onChange={handleMessageChange} className='NPBtextarea' onInputCapture={()=>{changed=true}}>Default text</textarea>
                </div>
            <div className='SaveButtonDiv'onClick={save}>
            <span>Save</span>
            </div>
        </div>
    );
}
export default NotePageBody;