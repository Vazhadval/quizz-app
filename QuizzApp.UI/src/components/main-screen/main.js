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
    const [currentQuoteNumber, setCurrectQuoteNumber] = useState(1);

    const [currentQuote, setCurrentQuote] = useState(null)

    const [correctAnswers, setCorrectAnswers] = useState(0);


    const handleAnswer = () => {

    }

    const handleStartGame = () => {
        setGameStarted(true);
        axios.get(`https://localhost:5001/api/quote?type=${gameModeType}&limit=${10}`)
            .then(res => {
                setQuotes(res.data.data);
                setTotalQuotes(res.data.data.length);
                setCurrentQuote(res.data.data[currentQuoteNumber]);
                console.log(res.data.data[currentQuoteNumber])
            });
    }



    return (

        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    {
                        !isGameStarted ?
                            <button className="btn btn-success btn-lg" onClick={handleStartGame}>Start Quiz</button> :
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
                            />

                    }
                </div>
            </div>
        </div>
    )
}
