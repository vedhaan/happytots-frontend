import React, { useEffect, useState } from 'react';
import './Whyhtps.css';
import axios from 'axios';


const WhyHtps = () => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=community`);
        if (res.data.success) {
          setImages(res.data.images.map(img => img.imageUrl));
        } else {
          console.error('Failed to fetch images.');
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const animateOnScroll = (elements) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
      });
    };

    const featureCards = document.querySelectorAll('.feature-card');
    const ageCards = document.querySelectorAll('.age-group-card');
    const areaCards = document.querySelectorAll('.area-card');
    const activityItems = document.querySelectorAll('.activity-item');
    const galleryItems = document.querySelectorAll('.gallery-item');

    animateOnScroll(featureCards);
    animateOnScroll(ageCards);
    animateOnScroll(areaCards);
    animateOnScroll(activityItems);
    animateOnScroll(galleryItems);
  }, []);

  return (
    <div className="why-htps">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>

      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <p>At Happy Tots Preschool, we offer a thoughtfully designed program for ages 3-6, blending playful hands-on methods and caring guidance to support your child's physical, emotional, and intellectual growth in a nurturing environment.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="container">
          {/* <div className="section-header">
            <h2>What Makes Us Special</h2>
            <p>Discover what makes us the preferred choice for early childhood education</p>
          </div> */}

          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">A d m i s s i o n &nbsp;&nbsp; P r o c e s s</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            <p className="why-subtitle">Discover what makes us the preferred choice for early childhood education</p>
          </div>


          <div className="features-grid">
            {[
              {
                icon: "fa-heart",
                title: "Nurturing Environment",
                img: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=1470&auto=format&fit=crop",
                desc: "Our warm, welcoming classrooms are designed to make children feel safe, loved, and ready to explore. Every corner is a new adventure!",
                linkText: "Learn more"
              },
              {
                icon: "fa-graduation-cap",
                title: "Experienced Educators",
                img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop",
                desc: "Our passionate teachers have specialized training in early childhood development and bring creativity to every lesson.",
                linkText: "Meet our team"
              },
              {
                icon: "fa-seedling",
                title: "Holistic Development",
                img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop",
                desc: "We focus on cognitive, social, emotional, and physical growth through balanced activities that children love.",
                linkText: "Our approach"
              }
            ].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-image">
                  <img src={item.img} alt={item.title} />
                  <div className="feature-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </div>
                <div className="feature-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#" className="feature-link">{item.linkText} <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="age-groups-section">
        <div className="container">
          {/* <div class="section-header">
                <h2>Tailored Learning for Each Age</h2>
                <p>Developmentally appropriate programs for every stage of early childhood</p>
            </div> */}

          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">T a i l o r e d &nbsp;&nbsp; L e a r n i n g &nbsp;&nbsp; f o r &nbsp;&nbsp; E a c h &nbsp;&nbsp; A g e &nbsp;&nbsp;</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            <p className="why-subtitle">Developmentally appropriate programs for every stage of early childhood</p>
          </div>

          <div className="age-groups-container">
            <div className="age-group-card age-3-4">
              <div className="age-header">
                <h3>3-4 Years</h3>
                <p>Explorers Program</p>
              </div>
              <div className="age-content">
                <ul>
                  <li>Independence Day craft activity</li>
                  <li>Foundation in phonetics, shapes, and early math</li>
                  <li>Making cards for special occasions</li>
                  <li>Creative expression with art and music</li>
                  <li>Activities related to various festivals</li>
                </ul>
              </div>
            </div>

            <div className="age-group-card age-4-5">
              <div className="age-header">
                <h3>4-5 Years</h3>
                <p>Discoverers Program</p>
              </div>
              <div className="age-content">
                <ul>
                  <li>Focus on early literacy and numeracy</li>
                  <li>Manners and confidence building</li>
                  <li>Activities for social-emotional development</li>
                  <li>Teamwork and collaboration exercises</li>
                  <li>Introduction to science and nature</li>
                </ul>
              </div>
            </div>

            <div className="age-group-card age-5-6">
              <div className="age-header">
                <h3>5-6 Years</h3>
                <p>Adventurers Program</p>
              </div>
              <div className="age-content">
                <ul>
                  <li>Pre-primary preparation with structured learning</li>
                  <li>Themed projects and problem-solving</li>
                  <li>Storytelling and creative writing</li>
                  <li>Basic computer and technology skills</li>
                  <li>Critical thinking and reasoning activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="learning-areas">
        <div className="container">
          {/* <div class="section-header">
                <h2>Core Learning Areas</h2>
                <p>Our comprehensive curriculum covers all essential developmental domains</p>
            </div> */}


          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">C o r e  &nbsp;&nbsp; L e a r n i n g &nbsp;&nbsp;  A r e a s</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            <p className="why-subtitle">Our comprehensive curriculum covers all essential developmental domains</p>
          </div>

          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Language & Literacy</h3>
              <p>Building communication skills through stories, songs, and phonics</p>
            </div>

            <div className="area-card">
              <div className="area-icon">
                <i className="fas fa-calculator"></i>
              </div>
              <h3>Mathematics & Reasoning</h3>
              <p>Fun with numbers, patterns, sorting, and problem-solving</p>
            </div>

            <div className="area-card">
              <div className="area-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>General Awareness</h3>
              <p>Understanding the world around us through exploration</p>
            </div>

            <div className="area-card">
              <div className="area-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <h3>Environmental Science</h3>
              <p>Nature appreciation and basic scientific concepts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="container">
          {/* <div class="section-header">
                <h2>Fun and Enriching Activities</h2>
                <p>Learning through play and creative exploration</p>
            </div> */}

          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">F u n &nbsp;&nbsp; a n d &nbsp;&nbsp;  E n r i c h i n g &nbsp;&nbsp; A c t i v i t i e s</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            <p className="why-subtitle">Learning through play and creative exploration</p>
          </div>

          <div className="activities-container">
            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Picture Reading</h3>
              <p>Developing early literacy skills through visual storytelling</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-music"></i>
              </div>
              <h3>Rhymes & Songs</h3>
              <p>Musical activities for language development and rhythm</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Family Crafts</h3>
              <p>Creative projects that encourage family involvement</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-apple-alt"></i>
              </div>
              <h3>Fruit Days</h3>
              <p>Nutrition education through fun fruit-themed activities</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Gardening</h3>
              <p>Connecting with nature and learning about plant life</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-hands"></i>
              </div>
              <h3>Festival Celebrations</h3>
              <p>Cultural awareness through diverse celebrations</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-theater-masks"></i>
              </div>
              <h3>Puppet Shows</h3>
              <p>Imaginative play and storytelling with puppets</p>
            </div>

            <div className="activity-item">
              <div className="activity-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Science Experiments</h3>
              <p>Simple, safe experiments to spark curiosity</p>
            </div>
          </div>
        </div>
      </section>


      <section className="gallery-section">
        <div className="container">
          {/* <div className="section-header">
      <h2>Our Happy Community</h2>
      <p>Glimpses of joyful learning at Happy Tots</p>
    </div> */}

          {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">O u r &nbsp;&nbsp; H a p p y &nbsp;&nbsp; C o m m u n i t y</h1>
            <div className="underline-container">
              {/* <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg> */}
              {/* <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg> */}
            </div>
            <p className="why-subtitle">Glimpses of joyful learning at Happy Tots</p>
          </div>


          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://res.cloudinary.com/dwyjoekgh/image/upload/v1764307395/happyTots/mcaucknvy8pje3urkf5l.jpg" alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Outdoor Exploration</h4>
                <p>Learning through nature play</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src="https://res.cloudinary.com/dwyjoekgh/image/upload/v1764307470/happyTots/bvoaaq3bropsimy2myin.jpg" alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Creative Expression</h4>
                <p>Developing imagination through art</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src="https://res.cloudinary.com/dwyjoekgh/image/upload/v1764307554/happyTots/cnkzn1cegza940smg8nh.jpg" alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Story Time</h4>
                <p>Building language and listening skills</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src={images[3]?.imageUrl} alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Science Discovery</h4>
                <p>Hands-on experiments for curious minds</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src={images[4]?.imageUrl} alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Music & Movement</h4>
                <p>Rhythm and coordination development</p>
              </div>
            </div>

            <div className="gallery-item">
              <img src={images[5]?.imageUrl} alt="Outdoor Play" />
              <div className="gallery-overlay">
                <h4>Team Building</h4>
                <p>Learning cooperation and friendship</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default WhyHtps;
