import * as React from "react";
import { createContext, useState } from 'react';

export const exhibitContext = createContext();

const ExhibitContextProvider = ({children}) => {
    const [exhibit, setExhibit] = useState();
    const [focus, setFocus] = useState();
    const [hotspots, setHotspots] = useState();
	const [isLanding, setIsLanding] = useState(true);
	const [orientation, setOrientation] = useState();
    const [lang, setLang] = useState("en");

    const context = [
        exhibit, setExhibit,
        focus, setFocus,
        hotspots, setHotspots,
        isLanding, setIsLanding,
        orientation, setOrientation,
        lang, setLang
    ]

    return (
        <exhibitContext.Provider value={context}>
            {children}
        </exhibitContext.Provider>
    );
};

export default ExhibitContextProvider;