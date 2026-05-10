import { useState } from 'react';

// Day 3 — Reusable Tabs component
// tabs prop: [{ label: 'Tab 1', content: <Component /> }]
function Tabs({ tabs = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="exercise-box">
      <h3>📑 Tabs — Day 3</h3>

      {/* Tab header buttons */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-btn ${activeIndex === index ? 'tab-active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content — conditional rendering */}
      <div className="tab-content">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}

export default Tabs;