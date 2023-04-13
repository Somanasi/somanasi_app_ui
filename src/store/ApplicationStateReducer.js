const ApplicationStateReducer = (state, action) => {
    switch (action.type) {
        // Toggling mobile devices
        case 'TOGGLE_MOBILE_VIEW':
            return state = {
                ...state,
                toggleMobileView: !state.toggleMobileView
            };
        // User login status
        case 'USER_LOGIN_STATUS':
            return state = {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            };
        // Home page slider
        case 'HOME_PAGE_SLIDER':
            return
    }
};

export { ApplicationStateReducer };