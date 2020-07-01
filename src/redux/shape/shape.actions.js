import ShapeTypes from "./shape.types";

export const addRectangle = data => ({
    type: ShapeTypes.ADD_RECTANGLE,
    payload: data,
})

export const editRectangle = data => ({
    type: ShapeTypes.EDIT_RECTANGLE,
    payload: data,
})