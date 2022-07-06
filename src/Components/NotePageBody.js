import React from 'react';
import '../Stylesheet/NotePageBody.css';
import Cross from '../media/CrossSymbol.svg';
import { Link } from "react-router-dom";
const NotePageBody = () =>{
    return (
        <div className='Body'>
           <div className='Title'> 
                <input type="text" class="TitleDiv"  placeholder="Title" data-text="Please enter a Title."></input>
                <img src={Cross}/>  
            </div>
            <div className='Content'>
                {/* <input type='textarea' class="ContentDiv"  ></input> */}
                <textarea>Default text</textarea>
            </div>
            <div className='SaveButtonDiv'>
            <span>Save</span>
            </div>
        </div>
    );
}
export default NotePageBody;