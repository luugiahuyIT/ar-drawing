import { useState } from 'react';
import { Slider } from 'antd';
import { ArrowLeftOutlined, QuestionCircleOutlined, LockOutlined, CameraFilled, DesktopOutlined, RightOutlined } from '@ant-design/icons';
import type { Route } from "./+types/home";
import { BottomSheet } from '../components/BottomSheet';
import { CameraTraceTipsSheet } from '../components/CameraTraceTipsSheet';
import { Drawer } from 'vaul';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AR Drawing App" },
    { name: "description", content: "AR Drawing with Antd and Vaul" },
  ];
}

export default function Home() {
  const [opacity, setOpacity] = useState(100);

  return (
    <div className="min-h-screen bg-[#FFF9F2] flex flex-col relative text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <ArrowLeftOutlined className="text-xl" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <QuestionCircleOutlined className="text-xl" />
        </button>
        <button className="px-6 py-2 bg-[#9F2E4A] text-white font-medium rounded-full shadow hover:bg-rose-900 transition-colors">
          Complete
        </button>
      </header>

      {/* Main Canvas Area */}
      <main className="flex-1 flex items-center justify-center relative">
        <div style={{ opacity: opacity / 100 }} className="transition-opacity">
          {/* Sample Drawing/SVG to mock the image */}
          <svg width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="#333" strokeWidth="2">
            <circle cx="50" cy="50" r="25" fill="#DCD3CC" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="25" />
            <path d="M50 15 v-10 M50 85 v10 M15 50 h-10 M85 50 h10" strokeLinecap="round" />
            <path d="M25 25 l-7 -7 M75 75 l7 7 M25 75 l-7 7 M75 25 l7 -7" strokeLinecap="round" />
          </svg>
        </div>
      </main>

      {/* Bottom Controls */}
      <div className="p-6 pb-8 bg-[#FFF9F2] flex flex-col gap-4 max-w-md mx-auto w-full">
        {/* Opacity Control */}
        <div className="border border-indigo-100 rounded-xl p-4 flex flex-col gap-2 bg-white/50 backdrop-blur-sm">
          <div className="flex justify-between text-sm font-medium text-gray-500">
            <span>Opacity</span>
            <span>{opacity}%</span>
          </div>
          {/* Ant Design Slider */}
          <div className="px-2">
            <Slider 
              value={opacity} 
              onChange={setOpacity} 
              tooltip={{ formatter: null }}
              styles={{
                track: { background: '#4F46E5', height: 6 },
                handle: { 
                  borderColor: '#4F46E5', 
                  backgroundColor: '#FFF',
                  width: 20, 
                  height: 20, 
                  marginTop: -7 
                },
                rail: { height: 6, backgroundColor: '#E0E7FF' }
              }}
            />
          </div>
        </div>

        <button className="py-3 px-4 border border-indigo-200 rounded-full text-indigo-600 font-medium flex justify-center items-center gap-2 hover:bg-indigo-50/50 transition-colors">
          <LockOutlined />
          Long-press to lock
        </button>
        
        {/* Row of dynamic Bottom Sheet Triggers */}
        <div className="flex justify-center gap-4 mt-2">
          
          {/* 1. Camera Trace Tips Popup */}
          <CameraTraceTipsSheet />

          {/* 2. Choose Trace Mode Popup (from your new image) */}
          <BottomSheet 
            title="Choose trace mode"
            trigger={
              <button className="text-sm font-medium text-indigo-600 hover:underline">
                Trace Mode Popup
              </button>
            }
          >
            {/* Camera Trace Option */}
            <button className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#FAF7F2] hover:bg-orange-50/50 transition-colors text-left w-full">
              <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-xl shadow-sm">
                <CameraFilled />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-[15px]">Camera Trace</h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Use phone camera to overlay outline on paper
                </p>
              </div>
              <RightOutlined className="text-gray-300 text-sm" />
            </button>

            {/* Screen Trace Option */}
            <button className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#FAF7F2] hover:bg-orange-50/50 transition-colors text-left w-full">
              <div className="w-12 h-12 rounded-xl bg-rose-500 flex items-center justify-center text-white text-xl shadow-sm">
                <DesktopOutlined />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-800 text-[15px]">Screen Trace</h3>
                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  Place paper on screen and trace
                </p>
              </div>
              <RightOutlined className="text-gray-300 text-sm" />
            </button>
          </BottomSheet>

        </div>

      </div>
    </div>
  );
}
