import React from 'react';
import Dock from '@/Components/Dock';
import DesktopComponent from '@/Components/Desktop';
import AppBar from '@/Components/AppBar';

export default function Desktop() {
  return (
    <main className="flex flex-col items-center justify-center bg-wallpaper bg-cover w-screen h-screen max-h-screen overscroll-none p-[10px] pt-0 overflow-hidden">
      <AppBar />
      <DesktopComponent />
      <Dock />
    </main>
  );
}
