import React, { useState } from 'react';
import '../styles/button.css'

function ShowButton(props: any) {

    return(
        <button className="button" onClick={props.onChange}>
            Show!
        </button>
    )

}

export default ShowButton;