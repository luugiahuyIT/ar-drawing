import React from 'react';
import { Drawer } from 'vaul';
import { BottomSheet } from './BottomSheet';

export function CameraTraceTipsSheet({ trigger }: { trigger?: React.ReactNode }) {
  const defaultTrigger = (
    <button className="text-sm font-medium text-indigo-600 hover:underline">
      Tips Popup
    </button>
  );

  return (
    <BottomSheet 
      title="Camera Trace tips"
      trigger={trigger || defaultTrigger}
    >
      <ul className="space-y-4 text-slate-700 text-[15px] font-medium px-2 pb-6">
        <li className="flex items-start">
          <span className="mr-3 text-2xl leading-none text-slate-800">•</span>
          <span>Place phone on a stable surface (use a cup as stand).</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-2xl leading-none text-slate-800">•</span>
          <span>Point camera at your paper. Adjust opacity slider to see outline through camera.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-2xl leading-none text-slate-800">•</span>
          <span>Tap on screen to lock focus on your paper area.</span>
        </li>
      </ul>
      <Drawer.Close asChild>
        <button className="w-full py-4 bg-[#FF4F6F] text-white font-semibold rounded-2xl shadow-sm hover:bg-rose-500 transition-colors mt-auto">
          Got it
        </button>
      </Drawer.Close>
    </BottomSheet>
  );
}
