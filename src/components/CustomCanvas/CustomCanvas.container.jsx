import { addRectangle } from "../../redux/shape/shape.actions";
import { connect } from "react-redux";
import CustomCanvas from "./CustomCanvas.component";

const mapStateToProps = (state) => ({
    rectangleData: state.shape.rectangleData
})

const CustomCanvasContainer =  connect(mapStateToProps, {addRectangle})(CustomCanvas);
export default CustomCanvasContainer
