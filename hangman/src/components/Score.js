import React, { useState } from 'react';

function Score(props) {
    let classScore = ""
    if (props.score<50) classScore="low-score"
    if (props.score>50) classScore="medium-score"
    if (props.score>80) classScore="high-score"
    

    return (

        <div className={classScore}>{props.score}</div>
    )
}

export default Score;