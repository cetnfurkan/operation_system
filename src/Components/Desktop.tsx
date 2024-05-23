"use client";
import React from 'react';
import DraggableIcon from '@/Components/Draggable';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import Window from '@/Components/Window';

const iconData = [
  { src: '/icons/wifi.svg', label: 'App 1', defaultPosition: { x: 20, y: 20 } },
  { src: '/icons/wifi.svg', label: 'App 2', defaultPosition: { x: 20, y: 40 } },
  { src: '/icons/wifi.svg', label: 'App 3', defaultPosition: { x: 20, y: 60 } },
  { src: '/icons/wifi.svg', label: 'App 4', defaultPosition: { x: 20, y: 80 } },
  {
    src: '/icons/wifi.svg',
    label: 'App 5',
    defaultPosition: { x: 20, y: 100 },
  },
  {
    src: '/icons/wifi.svg',
    label: 'App 6',
    defaultPosition: { x: 20, y: 120 },
  },
];

export default function Desktop() {
  const { windows } = useSelector((state: RootState) => state.window);

  return (
    <section className="flex flex-col flex-1 w-full">
      {/* Desktop icons section */}
      {iconData.map((icon, index) => (
        <DraggableIcon
          key={index}
          src={icon.src}
          label={icon.label}
          defaultPosition={icon.defaultPosition}
        />
      ))}
        {/* Open windows section */}
        {windows.map((window, index) => (
            <Window 
                key={index}
                id={window.id}
                title={window.title}
            >
                <div/>
            </Window>
        ))}
    </section>
  );
}
