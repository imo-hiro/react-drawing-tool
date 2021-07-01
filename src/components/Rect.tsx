import React, {CSSProperties, useEffect, useState} from "react";
import RectModel from "../models/Rect"

export const Rect: React.FC<RectModel> = (props) => {
  const [x, setX] = useState<number>(props.x);
  const [y, setY] = useState<number>(props.y);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [fill, setFill] = useState<string>("none");
  const [stroke, setStroke] = useState<string>("none");
  const [strokeWidth, setStrokeWidth] = useState<number>(0);

  useEffect(() => {
    setX(props.x);
    setY(props.y);
  }, []);


  const handleMouseDown = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    setIsDragging(true);
  }

  const handleMouseUp = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    setIsDragging(false);
  }

  const handleMouseMove = (e: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    if (isDragging) {
      setX(e.clientX - props.width/2);
      setY(e.clientY - props.height/2);
    }
  }

  const handleHover = () => {
    setFill("white");
    setStroke("black");
    setStrokeWidth(1);
  }

  const handleMouseOut = () => {
    setFill("none");
    setStroke("none");
    setStrokeWidth(0);
  }

  return (
    <>
      <rect
        x={x}
        y={y}
        width={props.width}
        height={props.height}
        fill={props.color}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      />
      <circle cx={x} cy={y} r="5" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      <circle cx={x+props.width} cy={y} r="5" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>
      <circle cx={x} cy={y+props.height} r="5" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>
      <circle cx={x+props.width} cy={y+props.height} r="5" fill={fill} stroke={stroke} strokeWidth={strokeWidth}/>
    </>

  )
}
