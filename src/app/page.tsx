import React from 'react';
import Dock from '@/Components/Dock';
import DesktopComponent from '@/Components/Desktop';

export default function Desktop() {
  return (
    <main className="flex flex-col items-center justify-center bg-wallpaper bg-cover w-screen h-screen max-h-screen overscroll-none p-4 overflow-hidden">
      <DesktopComponent />
      <Dock />
    </main>
  );
}
