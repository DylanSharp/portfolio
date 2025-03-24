import { useState } from 'react';

interface TooltipPosition {
  x: number;
  y: number;
}

interface UseTooltipReturn {
  showTooltip: boolean;
  tooltipPosition: TooltipPosition;
  tooltipProps: {
    onMouseMove: (e: React.MouseEvent) => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  TooltipComponent: React.FC<{ content: string }>;
}

/**
 * A custom hook for cursor-following tooltip functionality
 */
export const useTooltip = (offsetX: number = 10, offsetY: number = -30): UseTooltipReturn => {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  const tooltipProps = {
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  const TooltipComponent: React.FC<{ content: string }> = ({ content }) => {
    if (!showTooltip) return null;
    
    return (
      <div 
        className="fixed bg-background/90 text-foreground text-xs px-2 py-1 rounded shadow-md whitespace-nowrap z-50 pointer-events-none"
        style={{
          left: `${tooltipPosition.x + offsetX}px`,
          top: `${tooltipPosition.y + offsetY}px`
        }}
      >
        {content}
      </div>
    );
  };

  return {
    showTooltip,
    tooltipPosition,
    tooltipProps,
    TooltipComponent
  };
}; 