import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { PermissionModal } from './PermissionModal';
import { BottomSheet } from './BottomSheet';
import { CameraFilled, DesktopOutlined, RightOutlined } from '@ant-design/icons';

interface TraceModeSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageUrl?: string;
}

export function TraceModeSheet({ open, onOpenChange, imageUrl }: TraceModeSheetProps) {
  const navigate = useNavigate();
  const [showPermission, setShowPermission] = useState(false);

  return (
    <>
      <BottomSheet 
        title="Choose trace mode"
        open={open}
        onOpenChange={onOpenChange}
      >
        <div className="flex flex-col gap-3">
          {/* Camera Trace Option */}
          <button 
            onClick={() => {
              onOpenChange(false);
              const hasPermission = localStorage.getItem('cameraPermissionAllowed') === 'true';
              if (hasPermission) {
                navigate('/camera-trace', { state: { imageUrl } });
              } else {
                setShowPermission(true);
              }
            }}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#FAF7F2] hover:bg-orange-50/50 transition-colors text-left w-full"
          >
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
          <button 
            onClick={() => {
              onOpenChange(false);
              navigate('/screen-trace', { state: { imageUrl } });
            }}
            className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-[#FAF7F2] hover:bg-orange-50/50 transition-colors text-left w-full"
          >
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
        </div>
      </BottomSheet>
      
      <PermissionModal 
        isOpen={showPermission}
        onAllow={() => {
          localStorage.setItem('cameraPermissionAllowed', 'true');
          setShowPermission(false);
          navigate('/camera-trace', { state: { imageUrl } });
        }}
        onDeny={() => {
          setShowPermission(false);
          navigate('/not-allowed', { state: { imageUrl } });
        }}
        onClose={() => setShowPermission(false)}
      />
    </>
  );
}
