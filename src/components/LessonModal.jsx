import React from 'react';
import './LessonModal.css';

export default function LessonModal({ day, period = 'p2', onClose }) {
  if (!day) return null;

  const { lessonPlan = {}, perPeriod = {} } = day;
  const {
    bigIdea,
    agenda = [],
    objectives = [],
    tasks = [],
    asyncNotes,
    resources = []
  } = lessonPlan;

  const periodData = perPeriod[period] || {};
  const periodResources = periodData.resources || [];
  const meetUrl = periodData.meetUrl;

  return (
    <div className="lesson-modal-backdrop" onClick={onClose}>
      <div
        className="lesson-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <header className="lesson-header">
          {day.icon && (
            <div className="lesson-icon-wrapper">
              <img src={day.icon} alt="" className="lesson-icon" />
            </div>
          )}
          <div className="lesson-header-text">
            <p className="lesson-week">
              {day.week} • {day.dateLabel} • {period === 'p2' ? 'Period 2' : 'Period 3'}
            </p>
            <h2>{day.title}</h2>
            {bigIdea && <p className="big-idea">{bigIdea}</p>}
          </div>
        </header>

        <div className="lesson-layout">
          <div className="lesson-main-column">
            {day.moodGif && (
              <div className="mood-gif-wrapper">
                <img src={day.moodGif} alt="" className="mood-gif" />
              </div>
            )}

            {agenda.length > 0 && (
              <section className="lesson-section">
                <h3>Plan for Today</h3>
                <ol>
                  {agenda.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </section>
            )}

            {asyncNotes && (
              <section className="lesson-section">
                <h3>Asynchronous Notes</h3>
                <p>{asyncNotes}</p>
              </section>
            )}
          </div>

          <aside className="lesson-side-column">
            {/* LIVE LESSON / MEET BUTTON */}
            <section className="lesson-section">
              <h3>Live Lesson</h3>
              {meetUrl ? (
                <button
                  className="join-meet-btn"
                  onClick={() => window.open(meetUrl, '_blank')}
                >
                  Join Google Meet – {period === 'p2' ? 'Period 2' : 'Period 3'}
                </button>
              ) : (
                <p>No Meet link configured for this period.</p>
              )}
            </section>

            {objectives.length > 0 && (
              <section className="lesson-section">
                <h3>Learning Objectives</h3>
                <ul>
                  {objectives.map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ul>
              </section>
            )}

            {tasks.length > 0 && (
              <section className="lesson-section">
                <h3>Our Tasks</h3>
                <ul>
                  {tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* MERGED SHARED + PERIOD-SPECIFIC RESOURCES */}
            <section className="lesson-section">
              <h3>Resources</h3>
              <div className="lesson-resources">
                {resources.length + periodResources.length > 0 ? (
                  <ul>
                    {resources.map((res) => (
                      <li key={res.url}>
                        <a href={res.url} target="_blank" rel="noreferrer">
                          {res.label}
                        </a>
                      </li>
                    ))}
                    {periodResources.map((res) => (
                      <li key={res.url}>
                        <a href={res.url} target="_blank" rel="noreferrer">
                          {res.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No links yet — coming soon.</p>
                )}
              </div>
            </section>

            <section className="lesson-section iframe-section">
              <h3>Live Lesson View</h3>
              <div className="lesson-iframe-wrapper">
                <iframe
                  src={day.iframeUrl}
                  title={day.title}
                  loading="lazy"
                />
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
