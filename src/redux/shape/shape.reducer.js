// import ShapeTypes from './shape.types';

import ShapeTypes from "./shape.types";
import { handleEditSingleRectangle, getDefaultRectangle, handleDeleteRectangle } from "./shape.util";

const INITIAL_STATE = {
    idCount: 2,
    rectangleData: [
        {
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            fill: '#FACEC0',
            id: 0,
            name: 'Rect 1'
        },
        {
            x: 100,
            y: 200,
            width: 100,
            height: 100,
            fill: '#D4CFCE',
            id: 1,
            name: 'Rect 1'
        },
    ],
    currentShape: {
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        fill: '#FACEC0',
        id: 0,
        name: 'Rect 1'
    },
};

const shapeReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case ShapeTypes.ADD_RECTANGLE:
            const newRectangle = getDefaultRectangle(state.idCount)
            return {
                ...state,
                idCount: state.idCount + 1,
                rectangleData: [...state.rectangleData, {...newRectangle}],
                currentShape: {...newRectangle}
            };
        case ShapeTypes.EDIT_RECTANGLE:
            const newRectangleData = handleEditSingleRectangle(state.rectangleData, payload)

            return {
                ...state,
                rectangleData: newRectangleData,
                currentShape: payload
            };
        case ShapeTypes.DELETE_RECTANGLE:
            const rs = handleDeleteRectangle(state.rectangleData, payload)
            let opt = {}
            if (state.currentShape && payload === state.currentShape.id) {
                // delete current shape
                opt = {
                    currentShape: null
                }
            }
            return {
                ...state,
                rectangleData: rs,
                ...opt
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
