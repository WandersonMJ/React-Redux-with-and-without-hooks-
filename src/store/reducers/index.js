import { combineReducers } from 'redux';

import course from './course';
import demonstrationHooks from './demonstrationHooks';

export default combineReducers({
    course,
    demonstrationHooks
})