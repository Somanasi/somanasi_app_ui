import { createContext } from "react";
import { ApplicationStateReducer } from "./ApplicationStateReducer";

const applicationState = createContext(null);
const dispatchApplicationState = createContext(null);

export const ApplicationStateProvider = ({children}) => {
    
}