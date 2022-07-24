import React, { useEffect } from 'react';
import '../Stylesheet/NotePageBody.css';
import Cross from '../media/CrossSymbol.svg';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import colref from "../firebase.config";
import firestore, { app } from "../firebase.config";
import {doc,setDoc,collection,getDoc,deleteDoc} from "firebase/firestore";
// import { getDatabase, ref, set } from "firebase/database";
import Cookies from 'universal-cookie';


const NotePageBody = () =>{
    const navigate= useNavigate();
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const noteid = params.get('noteid');
    console.log(noteid);
    const namecookie= new Cookies();
    const name=namecookie.get("name");
    console.log(name);
    const collectionref =collection(firestore,name); 
    const [message, setMessage] = useState('');
    const [nid, setNid] = useState('');
    const [changed,setChanged]=useState(false);
    const handleMessageChange = event => {
        setMessage(event.target.value);
        setChanged(true);
      };
    const handleTitleChange = event=>{
        setNid(event.target.value);
        setChanged(true);
    }
    const getData = async () => {
        if(noteid == null) return;
        const docRef = doc(firestore, name, noteid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setMessage(docSnap.data().message);
            setNid(docSnap.data().title);
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        getData();
      }, []);
    const exit= ()=>{
        console.log(changed);
        if(changed)
        {
            if(window.confirm("Do you wish to save changes"))
            {
                console.log("save to db");
                save();
                setChanged(false);
            }
            else
            {
                console.log("discard");
                navigate('/dashboard');
            }
        }
        else
        {
            navigate('/dashboard');
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
        setDoc(doc(firestore,name,title),data);
        if(noteid!=null && noteid!=nid)
        {
            await deleteDoc(doc(firestore, name, noteid));
        }
        setChanged(false);
    }
    return (
        <div className='Body'>
               <div className='Title'>
                    <input  onChange={handleTitleChange} onInputCapture={()=>{setChanged(true)}} id="title" type="text" class="TitleDiv"  placeholder="Title" data-text="Please enter a Title." value={nid}></input>
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