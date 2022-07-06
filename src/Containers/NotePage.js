import React from "react";
import "../Stylesheet/NotePage.css";
import {Link} from 'react-router-dom';
import NotePageNavbar from '../Components/NotePageNavbar.js';
import NotePageBody from "../Components/NotePageBody";
const NotePage = () =>{
    return(
        <div>
            <NotePageNavbar/>
            <NotePageBody/>
        </div>

    );
}
export default NotePage;