import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {

    const [gameMode, setGameMode] = useState(0);

    const [actions, setActions] = useState({
        changeMode: modeType => setGameMode(modeType)
    });

    return (
        <AppContext.Provider value={{ gameMode, actions }}>
            {props.children}
        </AppContext.Provider>
    );
}