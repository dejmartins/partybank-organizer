import { useRef } from 'react';

export const useDrag = (onDrag: (x: number, y: number) => void) => {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const initialX = useRef(0);
  const initialY = useRef(0);

  const handleDrag = (event: any) => {
    const onMouseDown = (e: any) => {
      isDragging.current = true;
      startX.current = e.clientX;
      startY.current = e.clientY;
      initialX.current = e.target.dataset.x || 50;
      initialY.current = e.target.dataset.y || 50;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: any) => {
      if (isDragging.current) {
        const deltaX = e.clientX - startX.current;
        const deltaY = e.clientY - startY.current;
        const newX = Math.max(Math.min(initialX.current + deltaX, 100), 0);
        const newY = Math.max(Math.min(initialY.current + deltaY, 100), 0);
        onDrag(newX, newY);
      }
    };

    const onMouseUp = () => {
      isDragging.current = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    event.currentTarget.addEventListener('mousedown', onMouseDown);
  };

  return handleDrag;
};

export function formatNumber(value: number) {
  if (value >= 1000000) {
    return (Math.floor(value / 100000) / 10) + 'M';
  }
  if (value >= 1000) {
    return (Math.floor(value / 100) / 10) + 'K';
  }
  return value.toString();
}


