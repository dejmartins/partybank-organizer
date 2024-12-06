// components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function AnalyticsModal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full h-[90vh]">
        <div className="relative w-full m-auto animate-from-bottom max-w-md md:max-w-[90%] bg-white rounded-t-[30px] shadow-md ">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
