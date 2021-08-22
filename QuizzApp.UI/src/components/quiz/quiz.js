import React, { useContext, useState, useEffect, createRef } from 'react';
import './quiz.css';
import { AppContext } from '../../appContext';


export const Quiz = ({ quoteText, quoteOwner, quoteRandomOwner, quoteOwnerA, quoteOwnerB, quoteOwnerC, totaQuotes, currentQuoteNumber, quoteType, handleAnswer }) => {




    const [userAnswered, setUserAnswered] = useState(false);
    const [answer, setAnswer] = useState("");

    const [answers, setAnswers] = useState([]);

    const [checked, setChecked] = useState(true);


    const inputRef = createRef();

    const handleAnswerClick = (answer) => {
        setUserAnswered(true);
        setAnswer(answer);
    }

    useEffect(() => {
        setAnswers(shuffle([quoteOwner, quoteOwnerA, quoteOwnerB, quoteOwnerC]))
    }, [quoteOwner, quoteOwnerA, quoteOwnerB, quoteOwnerC])


    const renderAnswers = () => {
        const html = [
            answers.map((ans, index) => (
                <div className="ans ml-2 " key={index}>
                    <label className="radio">
                        <input type="radio" name="answer" onClick={() => handleAnswerClick(ans)} ref={inputRef} />
                        <span>{ans}</span>
                    </label>
                </div>
            ))
        ]

        if (userAnswered) {
            html.push(
                <button key="nextBtn" className="btn btn-primary border-success align-items-center btn-success mt-3" style={{ width: 150 }} type="button" onClick={handleNextClick}>
                    Next<i className="fa fa-angle-right ml-2"></i>
                </button>
            )
        }

        return html;
    }

    const handleNextClick = () => {
        setUserAnswered(false);
        handleAnswer(1, answer);
    }



    function shuffle(array) {
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (

        <div className="container mt-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-10 col-lg-10">
                    <div className="border">
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row justify-content-between align-items-center mcq">
                                <h4>Who Said It?</h4><span>({currentQuoteNumber + 1} of {totaQuotes})</span>
                            </div>
                        </div>
                        <div className="question bg-white p-3 border-bottom">
                            <div className="d-flex flex-row align-items-center question-title">
                                <h3 className="text-danger">Q.</h3>
                                <h5 className="mt-1 ml-2">{quoteText}</h5>
                            </div>

                            {
                                quoteType === 1 ?

                                    renderAnswers()
                                    :
                                    <div className="ans ml-2">
                                        <label className="radio"> <input type="text" /> <span>{quoteRandomOwner}</span>
                                        </label>
                                    </div>
                            }

                        </div>
                        {
                            quoteType !== 1 ?
                                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                    <button className="btn btn-primary d-flex align-items-center btn-danger" type="button" onClick={() => handleAnswer(0, false)}>
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;False</button>
                                    <button className="btn btn-primary border-success align-items-center btn-success" type="button" onClick={() => handleAnswer(0, true)}>
                                        True<i className="fa fa-angle-right ml-2"></i>
                                    </button>
                                </div> : null
                        }

                    </div>
                </div>
            </div>
        </div >


    )
}
