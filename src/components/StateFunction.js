const ApplicationStateReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_MOBILE_VIEW':
            return state = {
                ...state,
                toggleMobileView: !toggleMobileView
            }
    }
};

export default ApplicationStateReducer;