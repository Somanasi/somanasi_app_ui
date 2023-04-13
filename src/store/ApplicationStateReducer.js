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
        // Home page slider index
        case 'SET_HOME_PAGE_SLIDER_INDEX':
            const lastIndex = state.reviews.length - 1;
            if ( state.sliderIndex < 0 ){
               return state = {
                 ...state,
                 sliderIndex: lastIndex,
               };
            };
            if ( state.sliderIndex > lastIndex ){
                return state = {
                    ...state,
                    sliderIndex: 0,
                };
            };
        // Home page slider action
        case 'HOME_PAGE_SLIDER':
            return state = {
                ...state,
                sliderIndex: action.payload.sliderIndex,
            };
    }
};

export { ApplicationStateReducer };