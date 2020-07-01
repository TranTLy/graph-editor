import React from 'react';
import { connect } from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';

const SidebarOverview = ({ shape, addRectangle}) => {
    const handleAdd = () => {
        // do sthing....
        addRectangle({color: "fff", width:  200, height: 100})
    }

    return ( 
        <div className="side-bar-overview" onClick={handleAdd}>
            Hello
        </div>
     );
}

const mapStateToProps = (state) => ({
    shape: state.shape
})

const dispatchActionToProps = (dispatch)=> ({
    addRectangle: (data) => dispatch(addRectangle(data))
})

export default connect(mapStateToProps, dispatchActionToProps)(SidebarOverview);