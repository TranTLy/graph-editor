import { connect } from "react-redux";
import { addRectangle, changeCurrentShape } from "../../redux/shape/shape.actions";
import CustomCanvas from "./CustomCanvas.component";

const mapStateToProps = (state) => ({
    rectangleData: state.shape.rectangleData,
    currentShape: state.shape.currentShape
})

const CustomCanvasContainer = connect(mapStateToProps, { addRectangle, changeCurrentShape})(CustomCanvas);
export default CustomCanvasContainer
