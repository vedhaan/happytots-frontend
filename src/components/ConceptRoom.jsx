import React, { useEffect, useState } from "react";
import axios from 'axios';

const Room = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=concept-room`);
        if (res.data.success) {
          setImages(res.data.images);
        } else {
          console.error('Failed to fetch images.');
        }
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  const rooms = [
  {
    id: 1,
    delay: "delay-1",
    image: `${images[0]}`,
    tag: "ClassRoom",
    title: "Interactive Learning Classroom",
    desc: "Equipped with smart boards, engaging visual aids, and flexible seating to foster collaborative learning.",
  },
  {
    id: 2,
    delay: "delay-2",
    image: `${images[1]}`,
    tag: "AV Room",
    title: "Audio-Visual Experience Room",
    desc: "A digital space with surround sound and projection systems for immersive storytelling, documentaries, and visual learning.",
  },
  {
    id: 3,
    delay: "delay-3",
    image: `${images[2]}`,
    tag: "Art And Craft Area",
    title: "Creative Arts & Crafts Studio",
    desc: "A colorful, hands-on space filled with paints, clay, origami, and eco-friendly materials to spark imagination.",
  },
  {
    id: 4,
    delay: "delay-3",
    image: `${images[3]}`,
    tag: "Play Area",
    title: "Explorative Outdoor Play Zone",
    desc: "Designed with climbing frames, sand pits, and safe turf, this area boosts motor skills and outdoor social interaction.",
  },
  {
    id: 5,
    delay: "delay-5",
    image: `${images[4]}`,
    tag: "Indoor Games",
    title: "Indoor Recreation Room",
    desc: "A climate-controlled fun zone with board games, puzzles, and physical games for cognitive and physical development.",
  },
  {
    id: 6,
    delay: "delay-6",
    image: `${images[5]}`,
    tag: "Dining Room",
    title: "Child-Friendly Dining Hall",
    desc: "Bright and hygienic dining space where children enjoy nutritious meals together, promoting healthy eating habits.",
  },
];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".room-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
      });
    };

    const handleMouseOut = () => {
      const cards = document.querySelectorAll(".room-card");
      cards.forEach((card) => {
        card.style.transform = "translateY(-10px) rotateX(5deg)";
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".room-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (

      <>
          {/* Title Section */}
          <div className="title-container">
            <h1 className="section-title">O U R &nbsp;&nbsp; C O N C E P T &nbsp;&nbsp; R O O M S</h1>
            {/* <div className="underline-container">
              <svg className="pencil-underline" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10 Q150 30 295 10" />
              </svg>
              <svg className="pencil-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M48 2 62 16 26 52 12 52 12 38zM6 58v-14l34-34 14 14-34 34z" />
              </svg>
            </div> */}
            {/* <p className="subtitle">Nurturing creativity and growth</p> */}
          </div>

    <section className="concept-rooms">
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className={`room-card ${room.delay}`}>
            <div className="room-image">
              <img src={room.image} alt={room.title} />
            </div>
            <span className="room-tag">{room.tag}</span>
            <div className="room-content">
              <h3>{room.title}</h3>
              <p>{room.desc}</p>
              {/* <a href="#" className="explore-btn">
                Explore Space <i className="fas fa-arrow-right"></i>
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export { Room };
