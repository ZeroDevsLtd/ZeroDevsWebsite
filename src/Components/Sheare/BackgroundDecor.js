import React from 'react';

// Helper to render SVG shape
const Shape = ({ type, color, opacity, size, style, className, animationName, animationDuration }) => {
  const commonProps = {
    style: {
      ...style,
      animation: `${animationName} ${animationDuration}s linear infinite alternate`,
      opacity,
      position: 'absolute',
      willChange: 'transform',
      pointerEvents: 'none',
    },
    className,
    width: size,
    height: size,
    key: className,
  };
  if (type === 'circle') {
    return (
      <svg {...commonProps} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={size/2} cy={size/2} r={size/2-2} fill={color} />
      </svg>
    );
  }
  if (type === 'triangle') {
    return (
      <svg {...commonProps} viewBox="0 0 64 64" fill="none">
        <polygon points="32,4 60,60 4,60" fill={color} />
      </svg>
    );
  }
  if (type === 'square') {
    return (
      <svg {...commonProps} viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="12" fill={color} />
      </svg>
    );
  }
  return null;
};

// Default shapes config
const defaultShapes = [
  {
    type: 'circle',
    color: '#60a5fa',
    opacity: 0.18,
    size: 80,
    style: { top: '10%', left: '8%' },
    animationName: 'moveCircle1',
    animationDuration: 22,
  },
  {
    type: 'circle',
    color: '#2563eb',
    opacity: 0.13,
    size: 56,
    style: { top: '70%', left: '12%' },
    animationName: 'moveCircle2',
    animationDuration: 28,
  },
  {
    type: 'circle',
    color: '#0a2259',
    opacity: 0.10,
    size: 48,
    style: { top: '20%', right: '18%' },
    animationName: 'moveCircle3',
    animationDuration: 24,
  },
];

const BackgroundDecor = ({ shapes = defaultShapes }) => (
  <>
    <div className="absolute inset-0 pointer-events-none z-0">
      {shapes.map((shape, i) => (
        <Shape key={i} {...shape} className={`bg-shape-${i}`} />
      ))}
    </div>
    <style>{`
      @keyframes moveCircle1 {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(60px, 40px) scale(1.12); }
        100% { transform: translate(-30px, 60px) scale(1); }
      }
      @keyframes moveCircle2 {
        0% { transform: translate(0, 0) scale(1); }
        40% { transform: translate(40px, -30px) scale(1.08); }
        100% { transform: translate(-30px, -40px) scale(1); }
      }
      @keyframes moveCircle3 {
        0% { transform: translate(0, 0) scale(1); }
        60% { transform: translate(-50px, 30px) scale(1.15); }
        100% { transform: translate(40px, -40px) scale(1); }
      }
      @keyframes moveTriangle {
        0% { transform: translate(0, 0) scale(1); }
        40% { transform: translate(-40px, -30px) scale(1.08); }
        100% { transform: translate(30px, -60px) scale(1); }
      }
      @keyframes moveSquare {
        0% { transform: translate(0, 0) scale(1); }
        60% { transform: translate(-50px, 30px) scale(1.15); }
        100% { transform: translate(40px, -40px) scale(1); }
      }
    `}</style>
  </>
);

export default BackgroundDecor; 