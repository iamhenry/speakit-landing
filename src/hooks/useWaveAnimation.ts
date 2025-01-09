import { useState, useEffect } from 'react';

interface WavePoint {
  x: number;
  y: number;
}

const generateWavePoints = (
  length: number,
  baseAmplitude: number,
  frequency: number,
  phase: number,
  lineIndex: number,
  totalLines: number
) => {
  const points: WavePoint[] = [];
  const lineOffset = (lineIndex * Math.PI * 0.25) / totalLines;
  const amplitudeVariation = 1 - lineIndex * 0.08;

  for (let i = 0; i < length; i++) {
    const x = i;
    const progress = i / length;
    
    // Create a bell curve for amplitude modification
    const positionAmplitude = Math.sin(progress * Math.PI);
    
    // Scaled down variations for smaller container
    const varyingFrequency = frequency + (Math.sin(progress * Math.PI * 2 + phase) * 1.2 * positionAmplitude);
    const varyingAmplitude = baseAmplitude * (1 + Math.sin(progress * Math.PI * 3 + phase) * 0.5 * positionAmplitude);
    
    const secondaryWave = Math.sin(progress * Math.PI * 4 + phase * 2) * 
      (baseAmplitude * 0.3) * 
      positionAmplitude;
    
    const y = (Math.sin(progress * Math.PI * 2 * varyingFrequency + phase + lineOffset) 
      * varyingAmplitude 
      * amplitudeVariation) + secondaryWave;
    
    points.push({ x, y });
  }
  return points;
};

export const useWaveAnimation = (pointCount: number, amplitude: number, lineCount: number) => {
  const [waveLines, setWaveLines] = useState<WavePoint[][]>([]);

  useEffect(() => {
    let phase = 0;
    const intervalId = setInterval(() => {
      phase += 0.05;
      
      const newWaveLines = Array.from({ length: lineCount }, (_, lineIndex) =>
        generateWavePoints(pointCount, amplitude, 2, phase, lineIndex, lineCount)
      );
      
      setWaveLines(newWaveLines);
    }, 30);

    return () => clearInterval(intervalId);
  }, [pointCount, amplitude, lineCount]);

  return waveLines;
};
