import { createContext, useReducer } from "react";
import { ApplicationStateReducer } from "./ApplicationStateReducer";

const applicationState = createContext(null);
const dispatchApplicationState = createContext(null);

export const ApplicationStateProvider = ({ children }) => {
    const [appState, dispatchAppState] = useReducer(
        ApplicationStateReducer,
        {
            state_data: [],
            reviews: [],
            toggleMobileView: false,
            isLoggedIn: true,
        }
    )
}