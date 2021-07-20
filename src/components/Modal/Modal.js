import {useState, useEffect} from "react";

import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root')

export default function Modal({ onClose, image }) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    })
        
        
    const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };


    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }


        return createPortal(
            <div className={s.overlay} onClick={handleBackdropClick}>
                <div className={s.modal}>
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>,
            modalRoot)
    
   
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};