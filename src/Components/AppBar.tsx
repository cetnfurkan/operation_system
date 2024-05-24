import React from 'react';
import Image from 'next/image';

export default function AppBar() {
  return (
    <div className="w-screen bg-near-black p-1 flex px-4">
      <div className="flex-1">
      <div className="px-[5px] max-w-fit rounded-[14px] cursor-pointer">
          <Image
            width={24}
            height={24}
            src="icons/start-menu.svg"
            alt="start-menu"
          />
        </div>
      </div>
      <div className="flex items-center text-[12px]">
        <div className="text-white">{new Date().toLocaleTimeString()}</div>
      </div>
    </div>
  );
}
