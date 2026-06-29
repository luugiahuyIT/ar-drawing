import React, { type ReactNode } from 'react';
import { Drawer } from 'vaul';

interface BottomSheetProps {
  /** Element to trigger the bottom sheet to open */
  trigger?: ReactNode;
  /** Title of the bottom sheet */
  title?: string;
  /** Content inside the bottom sheet */
  children: ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Controlled onOpenChange handler */
  onOpenChange?: (open: boolean) => void;
}

export function BottomSheet({ trigger, title, children, open, onOpenChange }: BottomSheetProps) {
  return (
    <Drawer.Root shouldScaleBackground open={open} onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" />
        <Drawer.Content className="bg-surface flex flex-col rounded-t-[24px] mt-24 fixed bottom-0 left-0 right-0 z-50 focus:outline-none max-h-[90vh]">
          <div className="p-6 bg-surface rounded-t-[24px] flex flex-col items-center flex-1 overflow-hidden">
            {/* Drag Handle */}
            <div className="w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-6" />
            
            <div className="max-w-md mx-auto w-full flex-1 flex flex-col overflow-y-auto pb-6">
              {title && (
                <Drawer.Title className="font-bold text-xl text-center mb-6 text-slate-800">
                  {title}
                </Drawer.Title>
              )}
              
              {/* Dynamic Content */}
              <div className="flex flex-col gap-4">
                {children}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
