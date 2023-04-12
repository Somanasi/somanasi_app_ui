import { createContext, useContext, useReducer } from "react";
import { ApplicationStateReducer } from "./ApplicationStateReducer";

const ApplicationState = createContext(null);
const DispatchApplicationState = createContext(null);

export const ApplicationStateProvider = ({ children }) => {
    const [appState, dispatchAppState] = useReducer(
        ApplicationStateReducer,
        {
            state_data: [],
            reviews: [],
            toggleMobileView: false,
            isLoggedIn: true,
        }
    );
    return (
        <ApplicationState.Provider value={appState}>
            <DispatchApplicationState.Provider value={dispatchAppState}>
                {children}
            </DispatchApplicationState.Provider>
        </ApplicationState.Provider>
    )
};

export const useAppState = () => useContext(ApplicationState);
export const useDispatchAppState = () => useContext(DispatchApplicationState);