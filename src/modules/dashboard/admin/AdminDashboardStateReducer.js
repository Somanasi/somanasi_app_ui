import _ from 'lodash';
import links from './modules/content/links';
export const AdminDashboardStateReducer = (state, action) => {
    switch (action.type) {
        case 'LINKS':
            // Check if the payload does not already exist in the links array
            if (_.findIndex(state.links, {to: action.payload.to}) === -1) {
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
          return {
            ...state,
            links: state.links.map( (link) => {
              if (link.to === action.payload.id) {
                return {
                  ...link,
                  showSublinks: !link.showSublinks
                };
              }else{
                return {
                  ...link,
                  showSublinks: false,
                };
              };
            })
          }
        default: return state;
    }
};