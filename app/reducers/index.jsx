import {combineReducers} from 'redux';
import {tilesBoard} from './tilesBoard';


const rootReducer = combineReducers({
     tilesBoard: tilesBoard
});

export default rootReducer;
