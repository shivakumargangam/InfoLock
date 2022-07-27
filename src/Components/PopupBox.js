import React from 'react';
import '../Stylesheet/PopupBox.css';
const PopupBox = () => {
    return ( 
        <div className='PopupmainDiv'>
            <div className='PopBox'>
                <div className='PopupTitle'>
                    <span>Enter the Decryption Key</span>
                </div>
                <input className='PopupInput'></input>
                <div className='SubmitButton'>
                    <span>submit</span>
                </div>

            </div>
        </div>
     );
}
 
export default PopupBox;