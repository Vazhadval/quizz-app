import React, { useContext, useEffect, useState, useReducer } from 'react';
import { AppContext } from '../../appContext';
import { Quiz } from '../quiz/quiz';
import axios from 'axios';



export const Main = () => {

    const context = useContext(AppContext);
    const gameModeType = context.gameMode;


    const [quotes, setQuotes] = useState([]);
    const [isGameStarted, setGameStarted] = useState(false);

    const [totalQuotes, setTotalQuotes] = useState(0);
    const [currentQuoteNumber, setCurrectQuoteNumber] = useState(0);

    const [currentQuote, setCurrentQuote] = useState(null)

    const [correctAnswers, setCorrectAnswers] = useState(0);


    const handleAnswer = (quoteType, answer) => {

        // if quiz type in binary answer will be true or false
        if (quoteType === 0) {

            let isRandomOwnerRealOwnerOfQuote = currentQuote?.realQuoteOwner === currentQuote?.randomQuoteOwner;
            let isUserCorrect = isRandomOwnerRealOwnerOfQuote === answer;

            if (isUserCorrect === true) {
                setCorrectAnswers(correctAnswers + 1);
            }
        } else {
            console.log(answer);
            console.log(currentQuote?.realQuoteOwner)
            let isUserCorrect = currentQuote?.realQuoteOwner === answer;
            if (isUserCorrect === true) {
                setCorrectAnswers(correctAnswers + 1);
            }
        }

        setCurrectQuoteNumber(currentQuoteNumber + 1);
        setCurrentQuote(quotes[currentQuoteNumber + 1]);
    }

    const handleStartGame = () => {
        setGameStarted(true);
        axios.get(`https://localhost:5001/api/quote?type=${gameModeType}&limit=${10}`)
            .then(res => {
                setQuotes(res.data.data);
                setTotalQuotes(res.data.data.length);
                setCurrentQuote(res.data.data[currentQuoteNumber]);
            });

    }

    const handleEndGame = () => {
        setGameStarted(false);
        setCorrectAnswers(0);
        setCurrectQuoteNumber(0);
    }



    return (

        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    {
                        !isGameStarted ?
                            <button className="btn btn-success btn-lg" onClick={handleStartGame}>Start Quiz</button> :

                            currentQuoteNumber < totalQuotes ?
                                <Quiz
                                    quoteText={currentQuote?.quoteText}
                                    quoteOwner={currentQuote?.realQuoteOwner}
                                    quoteRandomOwner={currentQuote?.randomQuoteOwner}
                                    quoteOwnerA={currentQuote?.quoteOwnerA}
                                    quoteOwnerB={currentQuote?.quoteOwnerB}
                                    quoteOwnerC={currentQuote?.quoteOwnerC}
                                    currentQuoteNumber={currentQuoteNumber}
                                    totaQuotes={totalQuotes}
                                    quoteType={gameModeType}
                                    handleAnswer={handleAnswer}
                                /> :
                                <div>
                                    <p>Game Over. your score : {correctAnswers} from {totalQuotes}</p>
                                    <button className="btn btn-success" onClick={handleEndGame}>OK</button>
                                </div>

                    }
                </div>
            </div>
        </div>
    )
}
