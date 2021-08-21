import React, { useContext, useState, useEffect } from 'react';
import './quiz.css';
import { AppContext } from '../../appContext';


export const Quiz = ({ quoteText, quoteOwner, quoteRandomOwner, quoteOwnerA, quoteOwnerB, quoteOwnerC, totaQuotes, currentQuoteNumber, quoteType, handleAnswer }) => {


    const answers = [quoteOwner, quoteOwnerA, quoteOwnerB, quoteOwnerC];


    const renderAnswers = () => {
        shuffle(answers);
        return answers.map((answer, index) => (
            <div className="ans ml-2" key={index}>
                <label className="radio"> <input type="radio" onClick={handleAnswer} /> <span>{answer}</span></label>
            </div>
        ))
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
                                <h4>Who Said It?</h4><span>({currentQuoteNumber} of {totaQuotes})</span>
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
                                        <label className="radio"> <input type="text" onClick={handleAnswer} /> <span>{quoteRandomOwner}</span>
                                        </label>
                                    </div>
                            }

                        </div>
                        {
                            quoteType !== 1 ?
                                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                    <button className="btn btn-primary d-flex align-items-center btn-danger" type="button">
                                        <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;False</button>
                                    <button className="btn btn-primary border-success align-items-center btn-success" type="button">
                                        True<i className="fa fa-angle-right ml-2"></i>
                                    </button>
                                </div> : null
                        }

                    </div>
                </div>
            </div>
        </div>


    )
}
