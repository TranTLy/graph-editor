import React from 'react';
import { connect, ReactReduxContext, Provider} from 'react-redux';
import { addRectangle } from '../../redux/shape/shape.actions';
import { Stage, Layer } from 'react-konva';
import RectangleContainer from '../Rectangle/Rectangle.container';


const CustomCanvas = ({ rectangleData }) => {
    const [rectangles, setRectangles] = React.useState(rectangleData);
    const [selectedId, selectShape] = React.useState(null);

    const checkDeselect = e => {
        // deselect when clicked on empty area
        const clickedOnEmpty = e.target === e.target.getStage();
        if (clickedOnEmpty) {
            selectShape(null);
        }
    };
    return (
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
                                        isSelected={rect.id === selectedId}
                                        onSelect={() => {
                                            selectShape(rect.id);
                                        }}
                                    />
                                )
                            })}
                        </Layer>
                    </Provider>
                </Stage>
            )}
        </ReactReduxContext.Consumer>
    )
}

export default CustomCanvas
