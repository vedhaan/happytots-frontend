import React, { useEffect } from 'react';

export const Programs = () => {
  useEffect(() => {
    // Floating shape delay animation
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      shape.style.animationDelay = `${index * 3}s`;
    });

    // Tilt card effect on mouse move
    const cards = document.querySelectorAll('.pathway-card');
    cards.forEach(card => {
      const mouseMoveHandler = (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-10px)`;
      };

      const mouseLeaveHandler = () => {
        card.style.transform = 'translateY(-10px) rotateY(5deg)';
      };

      card.addEventListener('mousemove', mouseMoveHandler);
      card.addEventListener('mouseleave', mouseLeaveHandler);

      // Save for cleanup
      card._mouseMoveHandler = mouseMoveHandler;
      card._mouseLeaveHandler = mouseLeaveHandler;
    });

    // Cleanup
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', card._mouseMoveHandler);
        card.removeEventListener('mouseleave', card._mouseLeaveHandler);
      });
    };
  }, []);

  return (
    <div className="programs-section">
      {/* Title Section */}
      <div className="title-container">
        <h1 className="section-title">O U R&nbsp;&nbsp;P R O G R A M M E S</h1>
        {/* <div className="underline-container">
          <svg className="pencil-underline" viewBox="0 0 300 20">
            <path d="M5 10 Q150 30 295 10" />
          </svg>
          <svg className="pencil-icon" viewBox="0 0 64 64">
            <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
          </svg>
        </div> */}
        {/* <p className="h-subtitle">Building Bright Futures, One Step at a Time</p> */}
      </div>

      {/* Main Pathway Section */}
      <div className="preschool-pathway">

        {/* Pathway Cards */}
        <div className="interactive-pathway">
          {/* Playgroup */}
          <div className="pathway-card">
            <div className="card-illustration">
              <div className="illustration-circle" style={{ backgroundColor: 'rgba(255, 166, 0, 0.404)' }}>
                <div className="emoji">👶</div>
                <div className="ripple-effect"></div>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="card-content">
              <div className="age-badge">1.5-2.5 years</div>
              <h3>Playgroup</h3>
              <div className="duration">2 hours/day</div>
              <p>Sensory exploration and social foundations through guided play</p>
            </div>
          </div>

          {/* Nursery */}
          <div className="pathway-card">
            <div className="card-illustration">
              <div className="illustration-circle" style={{ backgroundColor: '#B5EAD7' }}>
                <div className="emoji">🧩</div>
                <div className="ripple-effect"></div>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="card-content">
              <div className="age-badge">2.5-3.5 years</div>
              <h3>Nursery</h3>
              <div className="duration">2.5 hours/day</div>
              <p>Cognitive development through structured play</p>
            </div>
          </div>

          {/* Junior KG */}
          <div className="pathway-card">
            <div className="card-illustration">
              <div className="illustration-circle" style={{ backgroundColor: '#C7CEEA' }}>
                <div className="emoji">🔤</div>
                <div className="ripple-effect"></div>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="card-content">
              <div className="age-badge">3.5-4.5 years</div>
              <h3>Junior KG</h3>
              <div className="duration">3 hours/day</div>
              <p>Phonics and numeracy foundations</p>
            </div>
          </div>

          {/* Senior KG */}
          <div className="pathway-card">
            <div className="card-illustration">
              <div className="illustration-circle" style={{ backgroundColor: '#FFB7B2' }}>
                <div className="emoji">🧠</div>
                <div className="ripple-effect"></div>
              </div>
            </div>
            <div className="card-content">
              <div className="age-badge">4.5-5.5 years</div>
              <h3>Senior KG</h3>
              <div className="duration">3.5 hours/day</div>
              <p>School readiness with STEM integration</p>
            </div>
          </div>
        </div>

        {/* Teacher Training */}
        <div className="teacher-training">
          <div className="training-illustration">
            <div className="teacher-icon">👩‍🏫</div>
            <div className="floating-children">
              <div className="child">👧</div>
              <div className="child">👦</div>
              <div className="child">🧒</div>
            </div>
          </div>
          <div className="training-content">
            <h3>Educator Development Program</h3>
            <p>Training teachers with modern early childhood techniques and classroom strategies.</p>
            <div className="training-highlights">
              <div className="highlight-item"><span>🎯</span> Child-centered approach</div>
              <div className="highlight-item"><span>🔄</span> Continuous development</div>
              <div className="highlight-item"><span>🌍</span> Global best practices</div>
            </div>
            <button className="pr-cta-button">
              <span>Learn About Training</span>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
