import * as React from "react";
import { createContext, useState } from 'react';

export const ExhibitContext = createContext();

const ExhibitProvider = ({children}) => {
    const [exhibit, setExhibit] = useState();
    const [hotspots, setHotspots] = useState();

    const context = [
        exhibit, setExhibit,
        hotspots, setHotspots,
    ]

    return (
        <ExhibitContext.Provider value={context}>
            {children}
        </ExhibitContext.Provider>
    );
};

export default ExhibitProvider;