import React from 'react';
import { connect, ReactReduxContext, Provider} from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';
import { Stage, Layer } from 'react-konva';
import RectangleContainer from '../Rectangle/Rectangle.container';
import './CustomCanvas.scss';


const CustomCanvas = ({ rectangleData, changeCurrentShape, currentShape }) => {
    const checkDeselect = e => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            // TODO
            // selectShape(null);
        }
    };
    return (
        <div className="custom-canvas">
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <Stage
                    style={{ backgroundColor: 'yellow' }}
                    width={window.innerWidth - 100}
                    height={window.innerHeight}
                    // width={500}
                    // height={500}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                >
                    <Provider store={store}>
                        <Layer>
                            {rectangleData.map((rect, i) => {
                                return (
                                    <RectangleContainer
                                        key={i}
                                        shapeProps={rect}
                                        isSelected={currentShape && rect.id === currentShape.id}
                                        onSelect={() => {
                                            if (!currentShape || (currentShape && currentShape.id !== rect.id)) {
                                                changeCurrentShape(rect);
                                            } 
                                        }}
                                    />
                                )
                            })}
                        </Layer>
                    </Provider>
                </Stage>
            )}
        </ReactReduxContext.Consumer>
        </div>
    )
}

export default CustomCanvas
