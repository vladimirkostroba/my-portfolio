import React, { useEffect } from "react";
import styles from './Modal.module.css'

export default function Modal({children,onClose}){

    useEffect(() => {
        window.addEventListener('keydown',handleKeyDown);

        return () => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    })

    function handleKeyDown (e) {
        if(e.code === 'Escape'){
            onClose()
        }
    }

    return(
        <div className={styles.Overlay}>
            <button 
            type="button"
            onClick={onClose}
            className={styles.CloseModal}>Close</button>
            <div className={styles.Modal}>
                {children}
            </div>
        </div>
    )
}