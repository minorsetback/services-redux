import { combineReducers } from 'redux';

import { servicesReducer as services } from '../bus/services/reducer';

export const rootReducer = combineReducers({
  services
});
