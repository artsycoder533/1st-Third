import React, { createContext } from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {

    return (
        <AppContext.Provider >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;