'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { setHideWindow } from '@/redux/slices/window';

export default function Dock() {
  const windows = useSelector((state: RootState) => state.window.windows);

  const dispatch = useDispatch<AppDispatch>();

  const handleShowWindow = (id: string) => {
    dispatch(setHideWindow({ id, hidden: false, isActive: true }));
  };

  return (
    <section className="h-[60px] w-full flex items-center gap-[5px]">
      <div className="bg-half-black min-h-full p-[2px] rounded-[14px] flex items-center gap-[4px]">
        <div className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black mr-[22px]">
          <Image
            width={40}
            height={40}
            src="icons/start-menu.svg"
            alt="start-menu"
          />
        </div>
        <div className="bg-half-black p-[6px] rounded-[14px] cursor-pointer hover:bg-near-black flex">
          <div className="text-end mr-[10px] text-[12px] text-white">
            <p>17°C</p>
            <p>Partly Cloudy</p>
          </div>
          <Image width={32} height={32} src="icons/weather.svg" alt="weather" />
        </div>
      </div>
      <div className="bg-half-black min-h-full p-[2px] rounded-[14px] flex items-center justify-center gap-[4px] flex-1">
        {windows.map((window, index) => (
          <div
            onClick={() => handleShowWindow(window.id)}
            key={index}
            className="relative pb-2"
          >
            <div className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black">
              <Image
                width={32}
                height={32}
                src="icons/start-menu.svg"
                alt="start-menu"
              />
            </div>

            {window.isActive && !window.isHidden && (
              <span className="w-1 h-1 bg-gray-100 hover:bg-gray-200 rounded-full absolute left-2/4 bottom-0 transform -translate-x-2/4" />
            )}
          </div>
        ))}
      </div>
      <div className="bg-half-black min-h-full p-[2px] rounded-[14px] flex items-center gap-[4px]">
        {[
          {
            src: 'icons/menu.svg',
            alt: 'menu',
            width: 24,
            height: 16,
          },
          {
            src: 'icons/wifi.svg',
            alt: 'wifi',
            width: 23,
            height: 19,
          },
          {
            src: 'icons/sound.svg',
            alt: 'sound',
            width: 19,
            height: 19,
          },
        ].map((icon, index) => (
          <div
            key={index}
            className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black w-[48px] h-[48px] flex items-center justify-center"
          >
            <Image
              width={icon.width}
              height={icon.height}
              src={icon.src}
              alt={icon.alt}
            />
          </div>
        ))}
        <div className="bg-half-black p-[6px] rounded-[14px] cursor-pointer hover:bg-near-black flex">
          <div className="text-end mr-[10px] text-[12px] text-white">
            <p>6:09 PM</p>
            <p>Friday, October 20th</p>
          </div>
        </div>
      </div>
    </section>
  );
}
