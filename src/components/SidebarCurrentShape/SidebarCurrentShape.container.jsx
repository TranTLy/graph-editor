import { connect } from "react-redux";
import { editRectangle } from '../../redux/shape/shape.actions'
import SidebarCurrentShape from "./SidebarCurrentShape.component";

const mapStateToProps = (state) => ({
    currentShape: state.shape.currentShape
})

const SidebarCurrentShapeContainer = connect(mapStateToProps, { editRectangle })(SidebarCurrentShape);
export default SidebarCurrentShapeContainer