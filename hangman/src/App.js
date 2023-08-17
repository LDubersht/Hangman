
import './App.css';
import { useState } from 'react';
import Score from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import GenerateLetters from './components/GenerateLetters';
import EndGame from './components/EndGame'


function App() {
const [score, setScore] = useState(60);
const [state,setState] = useState({
  word: "WATER",
  hint: "We drink it"
})


const [letters,setLetterStatuses] = useState(GenerateLetters())

const play = function() {
  setLetterStatuses(GenerateLetters());
  setScore(100);
} 
const setLetter = function(letter) {

  let prevoopsLetters = {...letters}
  setLetterStatuses({...prevoopsLetters, [letter]: true});

  setScore((prevScore) =>
      prevScore + (state.word.includes(letter) ? 20 : -20)
      );

  };


  return (
    <div className="App">

      <Score score = {score}/>
      <Solution state = {state} letterStatus = {letters}/>
      <Letters letterStatus = {letters} score = {score} onClick = {setLetter}/>
      <EndGame score = {score} state = {state} letters = {letters}
                     onPlay = {play}/>
    </div>
  );
}

export default App;
