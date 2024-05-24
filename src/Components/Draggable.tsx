// components/DraggableIcon.tsx
'use client';
import { addWindow } from '@/redux/slices/window';
import { AppDispatch } from '@/redux/store';
import React, { useState } from 'react';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

interface DraggableIconProps {
  src: string;
  label: string;
  defaultPosition: { x: number; y: number };
}

const DraggableIcon: React.FC<DraggableIconProps> = ({
  src,
  label,
  defaultPosition,
}) => {
  const [position, setPosition] = useState(defaultPosition);

  const dispatch = useDispatch<AppDispatch>();

  const handleStop: DraggableEventHandler = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const onDoubleClick = () => {
    dispatch(
      addWindow({
        id: uuidv4(),
        title: label,
        zIndex: 1,
        isActive: true,
        x: position.x,
        y: position.y,
        width: 400,
        height: 300,
        isFullScreen: false,
        isHidden: false,
      })
    );
  };

  return (
    <Draggable defaultPosition={position} onStop={handleStop}>
      <div
        onDoubleClick={onDoubleClick}
        className="
        cursor-pointer
        flex
        flex-col
        items-center
        justify-end
        w-[80px] 
        h-[90px] 
        "
      >
        <div
          className="
        bg-half-black 
        hover:bg-near-black 
        p-2 
        w-[80px] 
        h-[80px] 
        rounded-md 
        shadow 
        cursor-pointe 
        flex 
        flex-col 
        justify-end 
        bg-[url(/icons/wifi.svg)] 
        bg-no-repeat 
        bg-center 
        bg-[length:40px_40px]"
        />

        <p className="text-xs mt-1 text-center text-white">{label}</p>
      </div>
    </Draggable>
  );
};

export default DraggableIcon;
