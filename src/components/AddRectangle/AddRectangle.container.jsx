import { connect } from "react-redux";
import { addRectangle } from "../../redux/shape/shape.actions";
import AddRectangle from "./AddRectangle.component";

const AddRectangleContainer = connect(null, { addRectangle })(AddRectangle);
export default AddRectangleContainer
