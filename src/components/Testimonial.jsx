import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Testimonial = () => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=testimontials`);
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

  const families = [
    {
      img: `${images[0]}`,
      name: "The Sharma Family",
      width: "180px",
      rotate: "-5deg",
      left: "5%",
      top: "3%",
      tapeColor: "rgba(255, 241, 141, 0.6)",
      tapeRotate: "-5deg",
      pinTop: "5px",
      pinRight: "15px"
    },
    {
      img: `${images[1]}`,
      name: "The Patels",
      width: "200px",
      rotate: "7deg",
      left: "60%",
      top: "7%",
      tapeColor: "rgba(255, 166, 0, 0.6)",
      tapeRotate: "3deg",
      pinTop: "8px",
      pinRight: "10px"
    },
    {
      img: `${images[2]}`,
      name: "The Kapoors",
      width: "200px",
      rotate: "-10deg",
      left: "40%",
      top: "40%",
      tapeColor: "rgba(255, 241, 141, 0.6)",
      tapeRotate: "-2deg",
      pinTop: "12px",
      pinRight: "20px"
    },
    {
      img: `${images[3]}`,
      name: "The Singhs",
      width: "190px",
      rotate: "15deg",
      left: "70%",
      top: "65%",
      tapeColor: "rgba(255, 166, 0, 0.6)",
      tapeRotate: "1deg",
      pinTop: "7px",
      pinRight: "12px"
    },
    {
      img: `${images[4]}`,
      name: "The Vermas",
      width: "170px",
      rotate: "10deg",
      left: "7%",
      top: "52%",
      tapeColor: "rgba(255, 241, 141, 0.6)",
      tapeRotate: "-3deg",
      pinTop: "10px",
      pinRight: "18px"
    }
  ];

  return (
    <>
      <div className="testi-title">
        <div className="title-container">
          <h1 className="section-title">T E S T I M O N I A L S</h1>
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
      </div>

      <section className="testimonial-wrapper">
        <div className="left-info">
          <h2>
            <span className="highlight">Happy Families,</span><br />
            Happy Kids
          </h2>
          <p>
            Real stories from parents who have experienced the joy and growth of their children in our nurturing preschool
            environment.
          </p>
          <button className="btn-more" type="button" aria-label="More information about testimonials">
            More Info
          </button>
        </div>

        <div className="photo-board">
          {families.map((family, idx) => (
            <div
              key={idx}
              className="polaroid"
              style={{
                transform: `rotate(${family.rotate})`,
                width: family.width,
                left: family.left,
                top: family.top
              }}
            >
              <img src={family.img} alt={family.name} />
              <div className="caption">{family.name}</div>
              <div
                className="tape"
                style={{
                  backgroundColor: family.tapeColor,
                  transform: `rotate(${family.tapeRotate})`
                }}
              />
              <div
                className="pin"
                style={{
                  top: family.pinTop,
                  right: family.pinRight
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
