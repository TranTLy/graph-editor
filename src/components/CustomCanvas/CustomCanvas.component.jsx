import React from 'react';
import { ReactReduxContext, Provider} from 'react-redux';
import { Stage, Layer } from 'react-konva';
import RectangleContainer from '../Rectangle/Rectangle.container';
import './CustomCanvas.scss';


const CustomCanvas = ({ rectangleData, changeCurrentShape, currentShape }) => {
    const checkDeselect = e => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            // selectShape(null);
        }
    };
    return (
        <div className="custom-canvas">
            {/* Issue with react-konva when connect with store
            Ref: https://github.com/konvajs/react-konva/issues/311 */}
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <Stage
                    style={{ backgroundColor: '#fff0f6' }}
                    width={window.innerWidth - 400}
                    height={window.innerHeight}
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
