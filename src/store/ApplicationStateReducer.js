const ApplicationStateReducer = (state, action) => {
    switch (action.type) {
        // Page Title
        case 'PAGE_TITLE':
            return state = {
                ...state,
                pageTitle: () => {
                    
                }
            }
        // Toggling mobile devices
        case 'TOGGLE_MOBILE_VIEW':
            return state = {
                ...state,
                toggleMobileView: !state.toggleMobileView,
            };
        // User login status
        case 'USER_LOGIN_STATUS':
            return state = {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
            };
        case 'UPDATE_AUTHUSER':
            return state = {
                ...state,
                AuthUser: action.payload.authUser,
            }
    }
};

export { ApplicationStateReducer };