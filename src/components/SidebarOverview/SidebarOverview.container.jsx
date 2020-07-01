import { connect } from "react-redux";
import SidebarOverview from "./SidebarOverview.component";

const mapStateToProps = (state) => ({
    rectangleData: state.shape.rectangleData,
})


export default connect(mapStateToProps)(SidebarOverview);