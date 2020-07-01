import { connect } from "react-redux";
import RectangleItem from "./RectangleItem.component";
import { deleteRectangle, changeCurrentShape } from "../../../redux/shape/shape.actions";

const mapStateToProps = (state) => ({
    rectangleData: state.shape.rectangleData,
    currentShape: state.shape.currentShape
})

const RectangleItemContainer = connect(mapStateToProps, { deleteRectangle, changeCurrentShape})(RectangleItem);
export default RectangleItemContainer