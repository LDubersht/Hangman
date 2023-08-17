import React, { useState } from 'react';
import Letter from './Letter';

function Letters(props) {
    return (
        <div>
            <p>Letters</p>
            {
            Object.keys(props.letterStatus)
            .map((c, index) => <Letter key = {index} letter={c} letterStatus={props.letterStatus[c]} onClick={props.onClick} />)
            }
        
        </div>
    )
}

export default Letters;