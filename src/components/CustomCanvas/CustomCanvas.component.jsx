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
            // TODO
            // selectShape(null);
        }
    };
    return (
        <div className="custom-canvas">
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <Stage
                    style={{ backgroundColor: '#fff0f6' }}
                    width={window.innerWidth - 500}
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
