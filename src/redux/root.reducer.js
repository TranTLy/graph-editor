import { combineReducers } from 'redux';
import shapeReducer from './shape/shape.reducer';


const rootReducer = combineReducers({
  shape: shapeReducer,
});

export default rootReducer