import React, { useEffect } from 'react';
import './Program.css';

const programs = [
  {
    title: 'PLAYGROUP',
    age: '1.5 - 2.5 Years',
    duration: '3 hrs/day',
    description: 'A gentle introduction to learning through sensory play and social interaction in our nurturing environment designed for the youngest learners.',
    features: [
      'Sensory & motor skill development',
      'Social interaction through play',
      'Language exposure & music',
      'Safe, stimulating environment',
      'Nature-inspired discovery',
      'Emotional security building'
    ],
    image: 'https://img.freepik.com/premium-vector/cute-toddlers-playing-with-toys-flat-vector-illustration_198565-667.jpg',
    button: 'Learn More'
  },
  {
    title: 'NURSERY',
    age: '2.6 - 3.5 Years',
    duration: '3 hrs/day',
    description: 'Building language, literacy, and motor confidence through structured play and early learning activities that spark imagination.',
    features: [
      'Phonics & vocabulary building',
      'Fine motor skill development',
      'Interactive storytelling',
      'Early math concepts',
      'Creative expression',
      'Social skill development'
    ],
    image: 'https://img.freepik.com/premium-vector/kids-classroom-kindergarten-preschool-education-group-children-learning_258153-459.jpg',
    button: 'Explore Programme'
  },
  {
    title: 'KINDERGARTEN',
    age: 'Junior: 4-5 yrs',
    duration: 'Senior: 5-6 yrs',
    description: 'STEAM-based learning and creative exploration that prepares children for school success through hands-on experiences.',
    features: [
      'Hands-on STEAM activities',
      'Reading & writing readiness',
      'Critical thinking skills',
      'Creative problem solving',
      'Collaborative projects',
      'School transition support'
    ],
    image: 'https://img.freepik.com/premium-vector/school-classroom-interior-with-kids-students_198565-334.jpg',
    button: 'Programme Details'
  },
  {
    title: 'TEACHER TRAINING PROGRAM',
    age: '4 months',
    duration: 'Certification',
    description: 'Comprehensive early childhood education training that equips educators with research-based methodologies and practical skills.',
    features: [
      'Child development theory',
      'Curriculum planning',
      'Classroom management',
      'Observation & assessment',
      'Inclusive practices',
      'Practicum experience'
    ],
    image: 'https://img.freepik.com/free-vector/teacher-explaining-girl-how-use-robotics-kit_74855-16207.jpg',
    button: 'Start Training'
  }
];

const Program = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.program');
    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.4s ease-out';
      observer.observe(el);
    });
  }, []);

  return (
    <div className="program-section">
      <div className="decorative-shape shape-circle"></div>
      <div className="decorative-shape shape-triangle"></div>

          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">O U R&nbsp;&nbsp;P R O G R A M S</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle">Nurturing creativity and growth</p> */}
          </div>
    

      <div className="program-wrapper">
        {programs.map((prog, index) => (
          <div className="program" key={index}>
            <div className="program-img">
              <img src={prog.image} alt={prog.title} />
            </div>
            <div className="program-content">
              <h2>{prog.title}</h2>
              <div className="program-meta">
                <span><i className="fas fa-user"></i> {prog.age}</span>
                <span><i className="fas fa-clock"></i> {prog.duration}</span>
              </div>
              <p>{prog.description}</p>
              <div className="highlight">
                <ul>
                  {prog.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a href="#" className="pro-cta-button">
                {prog.button} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
