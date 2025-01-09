"use client"

import { motion } from 'framer-motion';
import { useWaveAnimation } from '../hooks/useWaveAnimation';

export const SubtleWaveform = () => {
  const pointCount = 150;
  const amplitude = 8;
  const lineCount = 5;
  const waveLines = useWaveAnimation(pointCount, amplitude, lineCount);

  return (
    <div className="bg-[#0078FF] rounded-full p-2">
      <svg 
        width="48" 
        height="27" 
        viewBox="0 0 96 54" 
        preserveAspectRatio="xMidYMid meet"
        className="opacity-90"
      >
        <g transform="translate(0, 27)">
          {waveLines.map((points, lineIndex) => (
            <motion.path
              key={lineIndex}
              d={`M ${points.map(p => `${p.x * (96 / pointCount)},${p.y}`).join(' L ')}`}
              fill="none"
              stroke="white"
              strokeWidth="1.15" 
              strokeOpacity={0.9 - (lineIndex * 0.08)}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                transition: { 
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: lineIndex * 0.08 
                }
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
