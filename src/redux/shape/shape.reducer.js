// import ShapeTypes from './shape.types';

import ShapeTypes from "./shape.types";
import { editSingleRectangle, getDefaultRectangle } from "./shape.util";

const INITIAL_STATE = {
    idCount: 1,
    rectangleData: [
        {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: 'red',
            id: 0,
            name: 'Rect 1'
        },
    ],
    currentShape: {},
};

const shapeReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case ShapeTypes.ADD_RECTANGLE:
            const newRectangle = getDefaultRectangle(state.idCount)
            return {
                ...state,
                idCount: state.idCount + 1,
                rectangleData: [...state.rectangleData, newRectangle]
            };
        case ShapeTypes.EDIT_RECTANGLE:
            const newRectangleData = editSingleRectangle(state.rectangleData, payload)

            return {
                ...state,
                rectangleData: newRectangleData,
                currentShape: payload
            };
        case ShapeTypes.CHANGE_CURRENT_SHAPE:
            
            return {
                ...state,
                currentShape: payload,
            };
        
        default:
            return state;
    }
};

export default shapeReducer;
