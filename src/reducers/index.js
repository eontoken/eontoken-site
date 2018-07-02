import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import bountyReducer from './BountyReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    bounty: bountyReducer,
});

export default rootReducer;
