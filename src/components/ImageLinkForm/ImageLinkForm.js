import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className=''>
            <p className='f3'>
                {'This magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='form center'>
                <div className='pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70 center' type='text' placeholder='Enter the URL of an image here' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue'
                    onClick={onButtonSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;