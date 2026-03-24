import React, { useState } from 'react';
import { days } from './data/days';
import DayCard from './components/DayCard';
import LessonModal from './components/LessonModal';
import './App.css';

function App() {
  const [selectedPeriod, setSelectedPeriod] = useState('p2');
  const [activeDay, setActiveDay] = useState(null);

  const visibleDays = days;

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="title-block">
          <h1>Design Engineering Island</h1>
          <p>
            Weekly guide for Intro to Design Engineering – Robotics &amp; Karel.
          </p>
        </div>

        <div className="period-toggle">
          <button
            className={selectedPeriod === 'p2' ? 'active' : ''}
            onClick={() => setSelectedPeriod('p2')}
          >
            Period 2
          </button>
          <button
            className={selectedPeriod === 'p3' ? 'active' : ''}
            onClick={() => setSelectedPeriod('p3')}
          >
            Period 3
          </button>
        </div>
      </header>

      <main className="island-wrapper">
        <div className="island-shadow" />
        <div className="island-plate">
          <div className="clouds" />
          <div className="timeline-row">
            {visibleDays.map((day) => (
              <DayCard key={day.id} day={day} onOpen={setActiveDay} />
            ))}
          </div>
        </div>
      </main>

            <footer className="app-footer">
        Drag, hover, and click the cards to explore this week.
      </footer>

      <LessonModal
        day={activeDay}
        period={selectedPeriod}
        onClose={() => setActiveDay(null)}
      />
    </div>
  );
}

export default App;

