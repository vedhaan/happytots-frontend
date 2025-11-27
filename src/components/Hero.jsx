import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";

const TypeWriter = (txtElement, words, wait = 3000) => {

  let txt = "";
  let wordIndex = 0;
  let isDeleting = false;

  const type = () => {
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    txt = isDeleting ? fullTxt.substring(0, txt.length - 1) : fullTxt.substring(0, txt.length + 1);
    txtElement.innerHTML = `<span class="txt">${txt}</span>`;
    let typeSpeed = 300;
    const typingElement = document.querySelector(".fa-pencil-alt");

    if (isDeleting) {
      typeSpeed /= 4;
      if (typingElement) typingElement.className = "fas fa-pencil-alt erasing-animation";
    } else {
      if (typingElement) typingElement.className = "fas fa-pencil-alt writing-animation";
    }

    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait;
      isDeleting = true;
      if (typingElement) typingElement.className = "fas fa-pencil-alt";
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 1000;
    }

    setTimeout(type, typeSpeed);
  };

  type();
};

export const HeroSection = () => {
  // const { imageData } = useContext(ShopContext);
  // console.log("Image Data:", imageData);

  

  useEffect(() => {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    TypeWriter(txtElement, words, wait);

    const heroElements = document.querySelectorAll(".hero-content > *");
    heroElements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + index * 200);
    });

    const floatingElements = document.querySelectorAll(".floating-kids, .floating-objects");
    floatingElements.forEach((el, index) => {
      setInterval(() => {
        el.style.transform = `translateY(${Math.sin(Date.now() / 600 + index) * 20}px)`;
      }, 50);
    });
  }, []);

  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=hero-banner`);
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

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>
          Where <span>Creativity</span> Meets <span>Learning</span>
        </h2>
        <p>
          At Creative Minds Preschool, we nurture young imaginations through
          play-based learning in a joyful, colorful environment that feels like home.
        </p>
        <div className="hero-buttons">
          <button className="cta-button">
            <i className="fas fa-clipboard-check"></i> Admission Open
          </button>
          <button className="secondary-button">
            <i className="fas fa-info-circle"></i> LEARN MORE
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="notebook-scene">
          {images.map((img, i) => (
            <div className={`floating-kids kid-${i + 1}`} key={i}>
              <img src={`${img}`} alt={`hero${i + 1}`} />
            </div>
          ))}

          {["pencil", "puzzle-piece", "book-open-reader", "cubes"].map((icon, i) => (
            <div className={`floating-objects object-${i + 1}`} key={i}>
              <i className={`fa-solid fa-${icon}`}></i>
            </div>
          ))}

          <div className="notebook">
            <div className="paper-clip"></div>
            <div className="notebook-content">
              <div className="container">
                <h1>
                  Need a <span className="txt-type" data-wait="2500" data-words='["Joyful Start?", "Creative Classroom?", "Play-Based Learning?"]'></span>
                  <i className="fas fa-pencil-alt"></i>
                </h1>
                <h2>
                  <a href="#" className="author">Happy Tots</a> is your solution!
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
