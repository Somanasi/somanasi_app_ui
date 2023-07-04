import _ from 'lodash';
export const AdminDashboardStateReducer = (state, action) => {
    switch (action.type) {
        case 'LINKS':
            // Check if the payload does not already exist in the links array
            if (_.findIndex(state.links, action.payload) === -1) {
              // Add the payload to the links array
              state = {
                ...state,
                links: [...state.links, action.payload],
              };
            }
            return state;
        case 'TOGGLEADMINDASHBOARDSIDEBAR':
          state = {
            ...state,
            toggleDashboardSidebar: !state.toggleDashboardSidebar,
          };   
          return state;
        case 'SHOWSUBLINKS':
          state = {
            ...state,
            showSublinks: !state.showSublinks,
          }
        default: return state;
    }
};