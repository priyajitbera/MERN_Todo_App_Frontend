import React from 'react';

import './Modal.css';

export default function Modal() {
    return (
        <div className='modal'>
            <div className='modal-message'>Confirm to delete?</div>
            <div className='modal-actions'>
                <button className='modal-action-btn'>Ok</button>
                <button className='modal-action-btn'>Cancel</button>
            </div>
        </div>
    )
}
