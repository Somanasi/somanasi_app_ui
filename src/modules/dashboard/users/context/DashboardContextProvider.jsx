import React, { useState, createContext } from 'react';

// Export gloabal context
export const DashboardContext = createContext(null);


// Export custorm hook context
export const DashboardContextProvider = ({ children }) => {
    // Toogle navigation
    const [navToggle, setNavToggle] = useState(false);

    const toggleSideBarmenu = () => {
        setNavToggle(!navToggle);
    }



    const contextVales = { toggleSideBarmenu, navToggle };

    // Return all related states and functions fro the dashboard
    return (
        <DashboardContext.Provider value={contextVales}>
            {children}
        </DashboardContext.Provider>
    );
}



