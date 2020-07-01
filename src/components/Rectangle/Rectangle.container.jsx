import { connect } from "react-redux";
import Rectangle from "./Rectangle.component";
import { editRectangle} from '../../redux/shape/shape.actions'

const mapStateToProps = (state) => ({
    shape: state.shape
})

const RectangleContainer = connect(mapStateToProps, { editRectangle})(Rectangle);
export default RectangleContainer