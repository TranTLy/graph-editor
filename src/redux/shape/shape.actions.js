import ShapeTypes from "./shape.types";

export const addRectangle = payload => ({
    type: ShapeTypes.ADD_RECTANGLE,
    payload,
})

export const editRectangle = payload => ({
    type: ShapeTypes.EDIT_RECTANGLE,
    payload,
})

export const changeCurrentShape = payload => ({
    type: ShapeTypes.CHANGE_CURRENT_SHAPE,
    payload,
})