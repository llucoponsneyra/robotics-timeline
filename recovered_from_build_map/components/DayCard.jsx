// src/components/DayCard.jsx
import React, { useState } from 'react';
import './DayCard.css';

export default function DayCard({ day, onOpen }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="day-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(day)}
    >
      <div className={`day-card-inner ${hovered ? 'is-flipped' : ''}`}>
        <div className="day-card-face day-card-front">
<div className="day-badge">
  <div className="day-chip">
    <span className="day-label">{day.dayLabel}</span>
  </div>
  <div className="week-center">{day.week}</div>
  <span className="date-label">{day.dateLabel}</span>
</div>
          <h3 className="lesson-title">{day.title}</h3>
        </div>

        <div className="day-card-face day-card-back">
          <h4>Today&apos;s focus</h4>
          <p>{day.summary}</p>
          <p className="card-hint">Click to open full lesson</p>
        </div>
      </div>
    </div>
  );
}

