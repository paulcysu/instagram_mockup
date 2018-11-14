import { combineReducers } from 'redux';
import PhotoReducer from './photoReducer';

const rootReducer = combineReducers({
    photos: PhotoReducer
});

export default rootReducer;