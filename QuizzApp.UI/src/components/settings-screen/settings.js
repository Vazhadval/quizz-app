import React, { useContext } from 'react';
import './settings.css';
import { AppContext } from '../../appContext';

export const Settings = () => {

    const context = useContext(AppContext);

    const gameModeType = context.gameMode;
    const handleModeChange = () => {
        context.actions.changeMode(gameModeType == 0 ? 1 : 0);
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col text-center mt-5">
                    <div className="form-switch ">
                        <span style={{ marginRight: 50 }}>Binary Mode</span>
                        <input className="form-check-input" style={{ width: 100, height: 30 }} type="checkbox" checked={gameModeType == 1} onChange={handleModeChange} />
                        <span style={{ marginLeft: 10 }}>Multiple Mode</span>
                    </div>
                </div>
            </div>
        </div>



    )
}
