// import ShapeTypes from './shape.types';

import ShapeTypes from "./shape.types";
import { editSingleRectangle } from "./shape.util";

const INITIAL_STATE = {
    rectangleData: [
        {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: 'red',
            id: 1,
            name: 'Rect 1'
        },
    ]
};

const shapeReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case ShapeTypes.ADD_RECTANGLE:
            return {
                ...state,
                rectangleData: [...state.rectangleData, payload]
            };
        case ShapeTypes.EDIT_RECTANGLE:
            const newRectangleData = editSingleRectangle(state.rectangleData, payload)
            return {
                ...state,
                rectangleData: newRectangleData
            };
        
        default:
            return state;
    }
};

export default shapeReducer;
