import React from 'react';
import './RealisticClouds.css';

export default function RealisticClouds() {
  return (
    <>
      {/* SVG Filters - Hidden, only used for effects */}
      <svg width="0" height="0">
        <defs>
          {/* Back layer - largest, softest */}
          <filter id="filter-back">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="4"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" scale="170" />
          </filter>

          {/* Mid layer - medium detail */}
          <filter id="filter-mid">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="3"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" scale="150" />
          </filter>

          {/* Front layer - sharpest, most detail */}
          <filter id="filter-front">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012"
              numOctaves="2"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" scale="100" />
          </filter>

          {/* Additional cloud variations */}
          <filter id="filter-cloud2-back">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011"
              numOctaves="4"
              seed="10"
            />
            <feDisplacementMap in="SourceGraphic" scale="160" />
          </filter>

          <filter id="filter-cloud2-mid">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011"
              numOctaves="3"
              seed="11"
            />
            <feDisplacementMap in="SourceGraphic" scale="140" />
          </filter>

          <filter id="filter-cloud2-front">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.011"
              numOctaves="2"
              seed="12"
            />
            <feDisplacementMap in="SourceGraphic" scale="90" />
          </filter>
        </defs>
      </svg>

      {/* Cloud 1 - Left side */}
      <div className="cloud-container cloud-1">
        <div className="cloud-layer cloud-back"></div>
        <div className="cloud-layer cloud-mid"></div>
        <div className="cloud-layer cloud-front"></div>
      </div>

      {/* Cloud 2 - Right side */}
      <div className="cloud-container cloud-2">
        <div className="cloud-layer cloud2-back"></div>
        <div className="cloud-layer cloud2-mid"></div>
        <div className="cloud-layer cloud2-front"></div>
      </div>
    </>
  );
}
