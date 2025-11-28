import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const BusJourney = () => {
  const busRef = useRef(null);
  const sceneRef = useRef(null);
  const animationPlayedRef = useRef(false);

  const [uspItems, setUspItems] = useState([]);

  // Fetch USP Items From Backend
  useEffect(() => {
    fetch("http://localhost:5000/api/images/getimages?section=usp")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.images.sort(
          (a, b) => Number(a.position) - Number(b.position)
        );
        setUspItems(sorted);
      })
      .catch((err) => console.error("USP Fetch Error:", err));
  }, []);

  // Bus Animation Logic
  useEffect(() => {
    if (uspItems.length === 0) return;

    const bus = busRef.current;
    const scene = sceneRef.current;

    if (!bus || !scene) return;

    const checkpoints = uspItems.map((item, i) => ({
      posPercent: (i + 1) * 20,
      id: `p${i + 1}`,
    }));

    const handleHoverStart = () => {
      if (animationPlayedRef.current) return;
      animationPlayedRef.current = true;

      const sceneWidth = scene.offsetWidth;
      const busWidth = bus.offsetWidth;

      const tl = gsap.timeline();

      tl.to(bus, {
        duration: 4,
        x: sceneWidth - busWidth - -80,
        ease: "none",
        onUpdate: () => {
          const busBounds = bus.getBoundingClientRect();
          const sceneBounds = scene.getBoundingClientRect();
          const busCenterX = busBounds.left + busBounds.width / 2;
          const sceneLeft = sceneBounds.left;
          const sceneWidth = sceneBounds.width;
          const busPosPercent =
            ((busCenterX - sceneLeft) / sceneWidth) * 100;

          checkpoints.forEach((check, i) => {
            const popup = document.getElementById(check.id);
            const checkpointEl = document.getElementById(`cp${i + 1}`);
            const checkpointImg = checkpointEl?.querySelector("img");

            if (
              busPosPercent >= check.posPercent - 5 &&
              popup &&
              !popup.classList.contains("shown")
            ) {
              popup.style.display = "block";
              popup.classList.add("shown");

              setTimeout(() => popup.classList.add("active"), 10);

              if (
                checkpointEl &&
                !checkpointEl.classList.contains("checked")
              ) {
                checkpointEl.classList.add("checked");
                if (checkpointImg) checkpointImg.src = "/src/img/bm2.png";
              }
            }
          });
        },
      });
    };

    scene.addEventListener("mouseenter", handleHoverStart);
    return () =>
      scene.removeEventListener("mouseenter", handleHoverStart);
  }, [uspItems]);

  return (
    <div>
      {/* Title Section */}
      <div className="title-container">
        <h1 className="section-title">O U R&nbsp;&nbsp;U S P</h1>
      </div>

      {/* Bus Journey Scene */}
      <div className="scene" ref={sceneRef}>
        <div className="sun">
          <div className="sun-ray ray1"></div>
          <div className="sun-ray ray2"></div>
        </div>

        <div className="road"></div>

        <div className="location home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/619/619153.png"
            alt="Home"
          />
          <div className="label">Home</div>
        </div>

        <div className="location school">
          <img src="/src/img/school.png" alt="Preschool" />
          <div className="label">Happy Tots Preschool</div>
        </div>

        <div className="bus-container" id="bus" ref={busRef}>
          <img src="/src/img/kid.png" alt="Bus" />
        </div>

        {/* Dynamic USP Stops */}
        {uspItems.map((item, index) => (
          <React.Fragment key={item._id}>
            {/* Checkpoint Image */}
            <div
              className="checkpoint"
              style={{ left: `${(index + 1) * 20}%` }}
              id={`cp${index + 1}`}
            >
              <img src="/src/img/bm.png" alt="checkpoint" />
            </div>

            {/* Popup (Bus Stop) */}
            <div
              className="bus-stop"
              style={{ left: `${(index + 1) * 20}%` }}
              id={`p${index + 1}`}
            >
              <div className="bus-sign" id={`b${index + 1}`}>
                {}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="usp-icon"
                />

                {/* Dynamic Title */}
                <h4>{item.title}</h4>

                {/* Dynamic Description */}
                <p>{item.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
