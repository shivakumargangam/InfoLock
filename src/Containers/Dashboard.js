import React,{useState,useEffect} from 'react';
import '../Stylesheet/Dashboard.css';
import Logo from '../media/Logo.svg';
import Plus from '../media/PlusSymbol.svg'
import { Link,useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
import {collection,getDocs } from "firebase/firestore";
import firestore from "../firebase.config";
// let notes=[["12/10/2022","Title of Note"],["13/10/2022","Title of Note2"],["14/10/2022","Title of Note3"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"]];
let notes=[];

const Dashboard = () => {  
    useEffect(() => {
         getData();
      });
    const [document, setDocument = (notes) => {
        document = notes
    }]=useState([]);
    const navigate = useNavigate();
    const cookie= new Cookies();
    const getData= async ()=>
    {
        const namecookie= new Cookies();
        const name=namecookie.get("name");
        const collectionref =collection(firestore,name);
        const querySnapshot = await getDocs(collectionref);
        if(notes.length===0)
        {
            querySnapshot.forEach((doc) => {
            notes.push(doc.data());
            });
            notes.sort((a,b)=> parseInt(b.date)-parseInt(a.date));
            setDocument(notes);
        }
    }
    return (
        
        <div onPointerMove={()=>
        {
        const user =cookie.get("user");
        if(!user)
        {
            navigate("/login");
        }
        }}>
            <div className='DBNavMain'>
                <Link to ='/' className='Links'>
                    <div className='DBNavlogo'>
                        <img src={Logo}/>
                        <span>INFOLOCK</span>
                    </div>
                </Link>
                <div className='DBNavLogoutdiv'>
                    <div className='DBNavLogoutBox'>
                        <Link to='/' className='Links'><span>Logout</span></Link>
                    </div>
                </div>
            </div>
        <div className='DBBody'>
            <span>Your Notes</span>
            <div className='DBNotes'>
                {document.map((test)=>
                {
                    const date= new Date(parseInt(test.date));
                    const fdate=date.getDate().toString().padStart(2,"0")+'/'+(date.getMonth()+1).toString().padStart(2,"0")+"/"+date.getFullYear();
                    return(
                            <Link to={{pathname:`/notepage/?noteid=${test.title}`}}>
                                <div className='DBNoteBox'onClick={()=>{
                                }}>
                                    <div className='DBNoteHead'>
                                        <span>{fdate}</span>
                                    </div>
                                    <div className='DBNotedesc'>
                                        <span>{test.title}</span>
                                    </div>
                                </div>
                            </Link>
                    );
                })}
                <Link to='/notepage' className='DBlink'>
                    <div className='DBPlusBox'>
                        <div className='DBPluslogo'>
                            <img src={Plus}/>
                        </div>
                        <div className='DBNotedesc'>
                            <span>Add</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
            
        </div>
     );
}
 
export default Dashboard;