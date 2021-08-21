import React, { useContext } from 'react';
import { AppContext } from '../../appContext';

export const Main = () => {

    const context = useContext(AppContext);
    const gameModeType = context.gameMode;

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <button className="btn btn-success btn-lg" onClick={() => console.log(gameModeType)}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}
