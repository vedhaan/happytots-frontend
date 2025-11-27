import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const BusJourney = () => {
      const busRef = useRef(null);
      const sceneRef = useRef(null);
      const animationPlayedRef = useRef(false);
    
      const checkpoints = [
        { posPercent: 20, id: "p1" },
        { posPercent: 40, id: "p2" },
        { posPercent: 60, id: "p3" },
        { posPercent: 80, id: "p4" },
      ];
    
      useEffect(() => {
        const bus = busRef.current;
        const scene = sceneRef.current;
    
        if (!bus || !scene) return;
    
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
              const busPosPercent = ((busCenterX - sceneLeft) / sceneWidth) * 100;
    
              checkpoints.forEach((check, i) => {
                const popup = document.getElementById(check.id);
                const checkpointEl = document.getElementById(`cp${i + 1}`);
                const checkpointImg = checkpointEl?.querySelector("img");
    
                if (busPosPercent >= check.posPercent - 5 && popup && !popup.classList.contains("shown")) {
                  popup.style.display = "block";
                  popup.classList.add("shown");
                  setTimeout(() => popup.classList.add("active"), 10);
    
                  if (checkpointEl && !checkpointEl.classList.contains("checked")) {
                    checkpointEl.classList.add("checked");
                    if (checkpointImg) checkpointImg.src = "/src/img/bm2.png";
                  }
                }
              });
            },
          });
        };
    
        scene.addEventListener("mouseenter", handleHoverStart);
        return () => scene.removeEventListener("mouseenter", handleHoverStart);
      }, []);
    
      return (
        <div>
          {/* Title Section */}
          <div className="title-container">
            <h1 className="section-title">O U R&nbsp;&nbsp;U S P</h1>
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
    
          {/* Bus Journey Scene */}
          <div className="scene" ref={sceneRef}>
            <div className="sun">
              <div className="sun-ray ray1"></div>
              <div className="sun-ray ray2"></div>
            </div>
    
            <div className="road"></div>
    
            <div className="location home">
              <img src="https://cdn-icons-png.flaticon.com/512/619/619153.png" alt="Home" />
              <div className="label">Home</div>
            </div>
    
            <div className="location school">
              <img src="/src/img/school.png" alt="Preschool" />
              <div className="label">Happy Tots Preschool</div>
            </div>
    
            <div className="bus-container" id="bus" ref={busRef}>
              <img src="/src/img/kid.png" alt="Bus" />
            </div>
    
            {[1, 2, 3, 4].map((i) => (
              <React.Fragment key={i}>
                <div className="checkpoint" style={{ left: `${i * 20}%` }} id={`cp${i}`}>
                  <img src="/src/img/bm.png" alt="checkpoint" />
                </div>
                <div className="bus-stop" style={{ left: `${i * 20}%` }} id={`p${i}`}>
                  <div className="bus-sign" id={`b${i}`}>
                    <img src={`/src/img/${["safety", "teacher", "children", "nurturing"][i - 1]}.png`} alt="" />
                    <h4>
                      {[
                        "Safe & Nurturing Environment",
                        "Experienced, Loving Teachers",
                        "More Than Preschool Family",
                        "Growing Future-Ready Kids",
                      ][i - 1]}
                    </h4>
                    <p>
                      {[
                        "A warm space where every child feels secure and cared for.",
                        "Passionate educators who understand and support each child.",
                        "A close-knit community where your child feels at home.",
                        "From mindfulness to motor skills, we nurture confident, kind learners.",
                      ][i - 1]}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    };
