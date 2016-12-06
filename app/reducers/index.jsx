import {combineReducers} from 'redux';
import {memoryReducer} from './memoryReducer';


const rootReducer = combineReducers({
     memory: memoryReducer
});

export default rootReducer;
