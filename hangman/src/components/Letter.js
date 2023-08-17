import React, { useState } from 'react';

function Letter(props) {

    const onClickLetter = function() {
        if (props.onClick !== undefined) {
            props.onClick(props.letter)
        }
    }
    let classLetter = ''
        if (props.letterStatus)
            {classLetter = 'letter-used'}
        else
            {classLetter = 'letter-unused'}

            return ( <span className = {classLetter} onClick = {onClickLetter}>  {props.letter}  </span>)

}

export default Letter;