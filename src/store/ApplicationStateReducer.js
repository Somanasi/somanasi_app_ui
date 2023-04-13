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
            const lastIndex = state.reviews.length - 1;
            if ( state.sliderIndex < 0 ){
               return state = {
                 ...state,
                 sliderIndex
               };
            }
    }
};

export { ApplicationStateReducer };