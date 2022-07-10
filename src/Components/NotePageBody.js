import React from 'react';
import '../Stylesheet/NotePageBody.css';
import Cross from '../media/CrossSymbol.svg';
import {useState} from 'react';
import firestore from "../firebase.config";
import {doc,setDoc, updateDoc } from "firebase/firestore";
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
        try{
            const data={
                date:`${Date.now()}`,
                message: msg,
                key:"key",
            }
            console.log(firestore);
            // const docref=doc(firestore,collection(firestore,"shiva"),title);
            // await setDoc(docref,data,{merge:true});

            const ref=doc(firestore,"shiva","title");
            console.log(ref);
            // await updateDoc(ref,data);
        }
        catch(e)
        {
            // console.log(e);
        }
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