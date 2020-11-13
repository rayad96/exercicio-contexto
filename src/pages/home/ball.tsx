import React from 'react';

interface BallProps {
  size: number;
  color: string;
}

export default function Ball({ size, color }: BallProps) {
  return <div style={{
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: '100%'
  }} />
}
