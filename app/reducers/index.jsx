import {combineReducers} from 'redux';
import {memoryReducer} from './memoryReducers';


const rootReducer = combineReducers({
     memory: memoryReducer
});

export default rootReducer;
