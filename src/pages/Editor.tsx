import React, {useState} from "react";
import {Rect} from "../components/Rect";
import RectModel from "../models/Rect";

export const Editor: React.FC = () => {
  const [elementList, setElementList] = useState<RectModel[]>([]);
  const [currentDepth, setCurrentDepth] = useState<number>(0);

  const handleDoubleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    const x = e.clientX;
    const y = e.clientY;
    setElementList(prevList => [...prevList, {x: x, y: y, height: 100, width: 100, color: "black", depth: currentDepth}])
    setCurrentDepth(prevState => prevState + 1);
  }

  return (
    <svg style={{width: "100vw", height: "100vh"}}
         onDoubleClick={handleDoubleClick}
    >
      {
        elementList.map((element) => {
          return (
            <Rect
              x={element.x}
              y={element.y}
              width={element.width}
              height={element.height}
              color={element.color}
              depth={element.depth}
            />
          )
        })
      }

    </svg>
  )
}
