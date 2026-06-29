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
      <ul className="space-y-4 text-slate-700 text-[14px] font-medium px-2 pb-6">
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
        <li className="flex items-start">
          <span className="mr-3 text-2xl leading-none text-slate-800">•</span>
          <span>Use mirror toggle if your paper is in front and view is flipped.</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-2xl leading-none text-slate-800">•</span>
          <span>Tap Complete when finished to save the session.</span>
        </li>
      </ul>
      <Drawer.Close asChild>
        <button className="w-full py-4 bg-gradient-to-r from-[#6B65FB] to-[#888DFB] text-white font-semibold rounded-2xl shadow-sm hover:opacity-90 transition-opacity mt-auto">
          Got it
        </button>
      </Drawer.Close>
    </BottomSheet>
  );
}
