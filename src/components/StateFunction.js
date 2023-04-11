const ApplicationStateReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MOBILE_VIEW':
            return state = {
                ...state,
                toggleMobileView: !state.toggleMobileView
            }
    }
};

export default ApplicationStateReducer;