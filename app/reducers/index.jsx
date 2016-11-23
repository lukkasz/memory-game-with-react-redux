import {combineReducers} from 'redux';
import * as memory from './memoryReducers';


const rootReducer = combineReducers({
     memory: memory
});

export default rootReducer;
