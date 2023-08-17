import React, { useState } from 'react';
import Letter from './Letter';

function Solution(props) {
    return (
        <div>
              {props.state.word.split("").map((c, index) => (
                    <Letter key = {index} letter = {props.letterStatus[c] ? c : "_"} letterStatus={props.letterStatus[c]}/>
                ))}
<p>{props.letterStatus["A"]}</p>
            <div>{props.state.hint}</div>

        </div>
    )
}

export default Solution;