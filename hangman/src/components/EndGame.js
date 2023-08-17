const EndGame = (props) => {
    const wordGuessed = props.state.word.split("").every(letter => props.letters[letter]);
    const isGameOver = props.score <= -100 || wordGuessed;

    if (isGameOver) {
        const message1 = wordGuessed ? "Congratulations!" : "Game Over!";
        const message2 = wordGuessed ? `Your score: ${props.score}` : `The secret word was: ${props.state.word}`;

        return (
            <div>
                <h2>{message1}</h2>
                <h3>{message2}</h3>
                <button onClick = {props.onPlay}>Play</button>
            </div>
        );
    }
};

export default EndGame;