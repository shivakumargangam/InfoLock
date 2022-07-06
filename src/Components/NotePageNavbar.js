import React from 'react';
import '../Stylesheet/NotePageNavbar.css';
import Logo from '../media/Logo.svg';
import { Link } from "react-router-dom";
const NotePageNavbar = () => {
    return ( 
        <div >
            <div className='NPNavMain'>
                <Link to ='/' className='Links'>
                    <div className='NPNavlogo'>
                        <img src={Logo}/>
                        <span>INFOLOCK</span>
                    </div>
                </Link>
                <div className='NPNavLogoutdiv'>
                    <div className='NPNavLogoutBox'>
                        <Link to='/' className='Links'><span>Logout</span></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NotePageNavbar;
