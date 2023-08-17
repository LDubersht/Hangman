import React, { useState } from 'react';



const GenerateLetters = function() {
    let objLetters = {};
    for (let i = 65; i < 91; i++) {
        let letter = [];
        objLetters[String.fromCharCode(i)] = false;
    }
    return (objLetters);
}

export default GenerateLetters;