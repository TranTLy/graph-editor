import React from 'react';
import './App.css';
import Konva from 'konva';
import { Stage, Layer, Star, Text, Rect } from 'react-konva';
import Img  from './img/img.jpg'
import Rectangle from '../src/components/Reactangle'

const initialRectangles = [
  {
    x: 10,
    y: 10,
    width: 100,
    height: 100,
    fill: 'red',
    id: 'rect1'
  },
  {
    x: 150,
    y: 150,
    width: 100,
    height: 100,
    fill: 'green',
    id: 'rect2'
  }
];

const App = () => {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  const checkDeselect = e => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        {rectangles.map((rect, i) => {
          return (
            <Rectangle
              key={i}
              shapeProps={rect}
              isSelected={rect.id === selectedId}
              onSelect={() => {
                selectShape(rect.id);
              }}
              onChange={newAttrs => {
                // console.log("new att: ", newAttrs)
                const rects = rectangles.slice();
                rects[i] = newAttrs;
                setRectangles(rects);
              }}
            />
          );
        })}
      </Layer>
    </Stage>
  );
}

// function App() {
//   const handleDragStart = e => {
//     console.log("start: ", e)
//     // e.target.setAttrs({
//     //   shadowOffset: {
//     //     x: 15,
//     //     y: 15
//     //   },
//     //   scaleX: 1.1,
//     //   scaleY: 1.1
//     // });
//   };
//   const handleDragEnd = e => {
//     console.log("end: ", e)

//     // e.target.to({
//     //   duration: 0.5,
//     //   easing: Konva.Easings.ElasticEaseOut,
//     //   scaleX: 1,
//     //   scaleY: 1,
//     //   shadowOffsetX: 5,
//     //   shadowOffsetY: 5
//     // });
//   };

//     return (
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//         <Layer>
//           <Rect
//             x={100}
//             y={200}
//             width={100}
//             height={200}
//             fill={"#999"}
            
//             draggable
//             // fill={this.state.isDragging ? 'green' : 'black'}
//             // onDragStart={handleDragStart}
//             // onDragEnd={handleDragEnd}
//             // onTouchMove={handleDragEnd}
//             // onDragMove={handleDragEnd}

//             onTransformEnd={e => {
//               console.log(e)
              
//               // const node = shapeRef.current;
//               // const scaleX = node.scaleX();
//               // const scaleY = node.scaleY();

//               // we will reset it back
//               // node.scaleX(1);
//               // node.scaleY(1);
//               // onChange({
//               //   ...shapeProps,
//               //   x: node.x(),
//               //   y: node.y(),
//               //   // set minimal value
//               //   width: Math.max(5, node.width() * scaleX),
//               //   height: Math.max(node.height() * scaleY)
//               // });
//             }
//           }

//           />
//         </Layer>
//       </Stage>
//     );
// }

export default App;
