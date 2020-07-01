import { connect } from "react-redux";
import RectangleItem from "./RectangleItem.component";
import { deleteRectangle } from "../../../redux/shape/shape.actions";

// const mapStateToProps = (state) => ({
//     rectangleData: state.shape.rectangleData,
// })

const RectangleItemContainer = connect(null, { deleteRectangle})(RectangleItem);
export default RectangleItemContainer