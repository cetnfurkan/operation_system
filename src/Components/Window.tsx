// components/Window.tsx
import {
  removeWindow,
  setActiveWindow,
  setFullScreen,
  setHideWindow,
  setWindowPosition,
} from '@/redux/slices/window';
import { AppDispatch } from '@/redux/store';
import { RootState } from '@/redux/store';
import { clsx } from 'clsx';
import React, { useMemo } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { Rnd, RndResizeCallback } from 'react-rnd';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, title, children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const windows = useSelector((state: RootState) => state.window.windows);

  const activeWindow = useMemo(
    () => windows.find((window) => window.id === id),
    [windows, id]
  );
  if (!activeWindow) return null;

  const handleDragStop: DraggableEventHandler = (e, data) => {
    dispatch(setWindowPosition({ id, x: data.x, y: data.y }));
  };

  const handleResizeStop: RndResizeCallback = (
    e,
    direction,
    ref,
    delta,
    position
  ) => {
    dispatch(
      setWindowPosition({
        id,
        x: position.x,
        y: position.y,
        width: ref.offsetWidth,
        height: ref.offsetHeight,
      })
    );
  };

  const bringToFront = () => {
    dispatch(setActiveWindow(id));
  };

  const closeWindow = () => {
    dispatch(removeWindow(id));
  };

  const minimizeWindow = () => {
    dispatch(setHideWindow({ id, hidden: true, isActive: false }));
  };

  const fullScreenWindow = () => {
    dispatch(setFullScreen({ id, isFullScreen: !activeWindow?.isFullScreen }));
  };

  return (
    <Rnd
      position={{
        x: activeWindow?.isFullScreen ? 0 : activeWindow!.x,
        y: activeWindow?.isFullScreen ? 0 : activeWindow!.y,
      }}
      onDragStop={handleDragStop}
      onResize={handleResizeStop}
      size={{
        width: activeWindow?.isFullScreen
          ? window.innerWidth - 20
          : activeWindow!.width,
        height: activeWindow?.isFullScreen
          ? window.innerHeight - 20
          : activeWindow!.height,
      }}
      default={{
        x: 100,
        y: 100,
        width: activeWindow?.isFullScreen
          ? window.innerWidth - 100
          : activeWindow!.width,
        height: activeWindow?.isFullScreen
          ? window.innerHeight - 100
          : activeWindow!.height,
      }}
      minWidth={200}
      minHeight={150}
      bounds="parent"
      dragHandleClassName="cursor-move"
      onClick={bringToFront}
      style={{ zIndex: activeWindow?.zIndex || 0 }}
      className={clsx(
        activeWindow?.isActive ? 'shadow-2xl' : 'shadow-md',
        activeWindow.isHidden ? '!hidden' : 'absolute'
      )}
    >
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden h-full">
        <div className="flex items-center justify-between bg-gray-200 p-2">
          <div className="flex items-center space-x-2">
            <div
              onClick={closeWindow}
              className="w-3 h-3 bg-red-500 hover:bg-red-600 rounded-full"
            />
            <div
              onClick={minimizeWindow}
              className="w-3 h-3 bg-yellow-500 hover:bg-yellow-600 rounded-full"
            ></div>
            <div
              onClick={fullScreenWindow}
              className="w-3 h-3 bg-green-500 hover:bg-green-600 rounded-full"
            ></div>
          </div>
          <div className="flex-grow text-center font-semibold cursor-move">
            {title}
          </div>
          <div className="w-16"></div>
        </div>
        <div className="p-4 h-full">{children}</div>
      </div>
    </Rnd>
  );
};

export default Window;
