import React from 'react'
import '../styles/button.css'

function BackButton(props: any) {

    return(
        <div className="button-container">
            <button className="button" onClick={props.onChange}>
                BACK
            </button>
        </div>   
    )
}

export default BackButton;