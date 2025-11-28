import { React, useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

const About = () => {

  const [ourLegacyImages, setOurLegacyImages] = useState([]);
  const [ourEnvironmentImages, setOurEnvironmentImages] = useState([]);
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const res1 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=our-legacy`);
          const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=environment`);
          if (res1.data.success) {
            setOurLegacyImages(res1.data.images);
          } else {
            console.error('Failed to fetch legacy images.');
          }
          if(res2.data.success){
            setOurEnvironmentImages(res2.data.images);
          } else {
            console.error('Failed to fetch environment images.');
          }
        } catch (err) {
          console.error('Error fetching images:', err);
        }
      };
  
      fetchImages();
    }, []);

  return (
    <>
      {/* Our Legacy Section */}
      <section className="section legacy-premium">
        {/* <div className="section-header">
          <h2>Our Legacy</h2>
          <p className="section-subtitle">
            Nearly two decades of nurturing young minds with care and innovation
          </p>
        </div> */}

          {/* Title Section */}
          <div className="ab-title-container">
            <h1 className="ab-section-title">O U R&nbsp;&nbsp; L e g a c y</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle"> Nearly two decades of nurturing young minds with care and innovation</p> */}
          </div>
    

        <div className="legacy-container">
          <div className="legacy-visual">
            <div className="legacy-image">
              <img src="https://res.cloudinary.com/dwyjoekgh/image/upload/v1764305494/happyTots/unyzhgdck6m7xzimpuxd.jpg" alt="HappyTots Story" />
              <div className="sun-glow"></div>
            </div>
          </div>

          <div className="legacy-story">
            <div className="floating-paper">
              <div className="badge">Just Getting Started</div>
              <p>
                Founded in 2005, HappyTots has been nurturing young minds for nearly two decades. Our journey began with a simple mission: to create a safe, stimulating environment where children could learn through play and exploration.
              </p>
              <p>
                What started as a small neighborhood preschool has grown into a beloved institution, recognized for our innovative curriculum and dedicated educators.
              </p>  
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="vision-mission-premium">
        <div className="vision">
          {/* <div className="section-header">
            <h2>Our Vision</h2>
            <p className="section-subtitle">The future we're building for every child in our care</p>
          </div> */}

   {/* Title Section */}
          <div className="ab-title-container">
            <h1 className="ab-section-title">O U R&nbsp;&nbsp; V i s i o n</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle"> Nearly two decades of nurturing young minds with care and innovation</p> */}
          </div>

          <div className="vision-content">
            <div className="vision-icon">
              <div className="icon-circle">
                <i className="fas fa-binoculars"></i>
              </div>
            </div>
            <div className="vision-text">
              <p>
                We envision a world where every child discovers their unique potential and develops a lifelong love of learning. Our preschool is more than just a preparation for kindergarten - it's a foundation for curious, confident, and compassionate individuals.
              </p>
            </div>
          </div>
        </div>

        <div className="mission-block">
          {/* <div className="mission-header">
            <div className="title-wrapper">
              <span className="title-label">Our Approach</span>
              <h2 className="section-title">Mission</h2>
            </div>
            <p className="section-subtitle">How we bring our vision to life every day</p>
          </div> */}

   {/* Title Section */}
          <div className="ab-title-container">
            <h1 className="ab-section-title">O U R&nbsp;&nbsp; M i s s i o n</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle"> Nearly two decades of nurturing young minds with care and innovation</p> */}
          </div>

          <div className="mission-grid">
            {[
              { icon: "❤️", text: "Nurturing each child's individual growth and self-esteem" },
              { icon: "🌱", text: "Cultivating creativity, curiosity, and critical thinking" },
              { icon: "🤝", text: "Building strong partnerships with families and community" },
              { icon: "😊", text: "Creating joyful, memorable learning experiences" },
            ].map((item, index) => (
              <div className="mission-point" key={index}>
                <div className="point-visual">
                  <div className="point-circle">
                    <div className="point-icon">{item.icon}</div>
                  </div>
                  {index < 3 && <div className="point-connector"></div>}
                </div>
                <div className="point-content">
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-s-tier">
        {/* <div className="approach-header">
          <h2>Our Approach</h2>
          <p className="section-subtitle">Innovative methods that make learning engaging and effective</p>
        </div> */}

   {/* Title Section */}
          <div className="ab-title-container">
            <h1 className="ab-section-title">O U R&nbsp;&nbsp; A p p r o a c h</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle"> Nearly two decades of nurturing young minds with care and innovation</p> */}
          </div>

        <div className="approach-cards">
          {[
            { icon: "fa-paint-brush", title: "Play-Based Learning", desc: "Children learn best through play. Our curriculum is designed around hands-on activities that make learning fun while developing cognitive, social, and motor skills." },
            { icon: "fa-leaf", title: "Nature Exploration", desc: "Our outdoor classrooms and gardens provide hands-on experiences with nature, fostering environmental awareness and scientific curiosity." },
            { icon: "fa-music", title: "Creative Expression", desc: "Art, music, and movement are integral parts of our daily routine, allowing children to express themselves and develop their unique talents." },
            { icon: "fa-hands", title: "Social Development", desc: "We focus on building emotional intelligence, conflict resolution skills, and positive relationships - the foundation for future success." }
          ].map((card, idx) => (
            <div className="approach-card" key={idx}>
              <div className="card-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Environment Section */}
      <section className="section environment">
        {/* <div className="section-header">
          <h2>Our Environment</h2>
          <p className="section-subtitle">Spaces designed to inspire wonder and ensure safety</p>
        </div> */}

   {/* Title Section */}
          <div className="ab-title-container">
            <h1 className="ab-section-title">O U R&nbsp;&nbsp; E n v i r o n m e n t</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            {/* <p className="subtitle"> Nearly two decades of nurturing young minds with care and innovation</p> */}
          </div>

        <div className="environment-content">
          <div className="environment-text">
            <p>
              Our purpose-built facilities are designed to inspire wonder and creativity while ensuring safety and comfort:
            </p>

            <ul className="features">
              <li><span className="icon">☀️</span><span>Bright, sun-filled classrooms with age-appropriate learning centers</span></li>
              <li><span className="icon">🌳</span><span>Natural playgrounds with gardens, sand areas, and climbing structures</span></li>
              <li><span className="icon">📚</span><span>Cozy reading nooks stocked with diverse children's literature</span></li>
              <li><span className="icon">🎨</span><span>Creative art studios with varied materials for exploration</span></li>
              <li><span className="icon">🎵</span><span>Music and movement space with instruments and open areas</span></li>
              <li><span className="icon">🛡️</span><span>Secure, monitored facilities with strict safety protocols</span></li>
            </ul>
          </div>
          <div className="environment-image">
             <div className="image-grid">
             <div className="grid-item"><img src={`${ourEnvironmentImages[0]}`} /></div>
             <div className="grid-item"><img src={`${ourEnvironmentImages[1]}`} /></div>
             <div className="grid-item"><img src={`${ourEnvironmentImages[2]}`} /></div>
             <div className="grid-item"><img src={`${ourEnvironmentImages[3]}`} /></div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
