import React from 'react';
import Image from 'next/image';

export default function Dock() {
  return (
    <section className="h-[46px] w-full flex items-center gap-[5px]">
      <div className="bg-half-black min-h-full p-[2px] rounded-[14px] flex items-center gap-[4px]">
        <div className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black mr-[22px]">
          <Image
            width={34}
            height={34}
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
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black"
          >
            <Image
              width={32}
              height={32}
              src="icons/start-menu.svg"
              alt="start-menu"
            />
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
            className="bg-half-black p-[4px] rounded-[14px] cursor-pointer hover:bg-near-black w-[42px] h-[42px] flex items-center justify-center"
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
