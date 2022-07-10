import React from 'react';
import '../Stylesheet/Dashboard.css';
import Logo from '../media/Logo.svg';
import Plus from '../media/PlusSymbol.svg'
import { Link,useNavigate} from "react-router-dom";
import Cookies from "universal-cookie";
// import app from "../firebase.config";
const notes=[["12/10/2022","Title of Note"],["13/10/2022","Title of Note2"],["14/10/2022","Title of Note3"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"],["12/10/2022","Title of Note"]];
const Dashboard = () => {
    const navigate = useNavigate();
    const cookie= new Cookies();
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
                {/* <div className='DBNoteBox'>
                    <div className='DBNoteHead'>
                        <span>12/10/2022</span>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Title of the Note</span>
                    </div>
                </div>
                <div className='DBNoteBox'>
                    <div className='DBNoteHead'>
                        <span>12/10/2022</span>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Title of the Note</span>
                    </div>
                </div>
                <div className='DBNoteBox'>
                    <div className='DBNoteHead'>
                        <span>12/10/2022</span>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Title of the Note</span>
                    </div>
                </div>
                <div className='DBNoteBox'>
                    <div className='DBNoteHead'>
                        <span>12/10/2022</span>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Title of the Note</span>
                    </div>
                </div>
                <div className='DBPlusBox'>
                    <div className='DBPluslogo'>
                        <img src={Plus}/>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Add</span>
                    </div>
                </div> */}
                {notes.map((test)=>
                {
                    return(
                        <div className='DBNoteBox' onClick={()=>{
                            alert("hi");
                        }}>
                    <div className='DBNoteHead'>
                        <span>{test[0]}</span>
                    </div>
                    <div className='DBNotedesc'>
                        <span>{test[1]}</span>
                    </div>
                </div>
                    );
                })}
                <div className='DBPlusBox' onClick={()=>{
                    alert("add");
                }}>
                    <div className='DBPluslogo'>
                        <img src={Plus}/>
                    </div>
                    <div className='DBNotedesc'>
                        <span>Add</span>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
     );
}
 
export default Dashboard;