import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css"; // Extracted CSS should be placed here

const galleryData = [
  { category: "activities", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764690855/happyTots/bakedgaxl7genxmzhrwf.jpg", alt: "Activity" },
  { category: "activities", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764690941/happyTots/mu0c7o7hyeyp73zen7g4.jpg", alt: "Activity" },
  { category: "activities", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691008/happyTots/fjb1ndq3kuf4bkcbtiaz.jpg", alt: "Activity" },
  { category: "activities", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691047/happyTots/umgcvweb0r4ngxiwnekf.jpg", alt: "Activity" },

  { category: "classrooms", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691122/happyTots/t2czhwpktdslvmyhnzhu.jpg", alt: "Classroom" },
  { category: "classrooms", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691191/happyTots/h5mtqtseiu1d6l42md4r.jpg", alt: "Classroom" },
  { category: "classrooms", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691656/happyTots/zibw9x7omlbafaqxt41j.jpg", alt: "Classroom" },
  { category: "classrooms", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691916/happyTots/xkgkksubd1wdihs62fcj.jpg", alt: "Classroom" },

  { category: "play-areas", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764691983/happyTots/n6hso0pin5pqdnuuf3p1.jpg", alt: "Play Area" },
  { category: "play-areas", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764692016/happyTots/emkimwmmik5cim7n7qyt.jpg", alt: "Play Area" },

  { category: "celebrations", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764692166/happyTots/wmvnxq8j6y7inlswiaox.jpg", alt: "Celebration" },
  { category: "celebrations", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764692306/happyTots/sdknx2xq0tnuncxepsmh.jpg", alt: "Celebration" },
  { category: "celebrations", img: "https://res.cloudinary.com/dwyjoekgh/image/upload/v1764692340/happyTots/c69xhubb50ampg6ouw3a.jpg", alt: "Celebration" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(galleryData);
  const [activeIndex, setActiveIndex] = useState(0);
  const filterBarRef = useRef(null);
  const indicatorRef = useRef(null);
  const btnRefs = useRef([]);

  useEffect(() => {
    const filtered = filter === "all"
      ? galleryData
      : galleryData.filter(item => item.category === filter);
    setFilteredData(filtered);
  }, [filter]);

  useEffect(() => {
    const activeBtn = btnRefs.current[activeIndex];
    if (activeBtn && filterBarRef.current && indicatorRef.current) {
      const btnRect = activeBtn.getBoundingClientRect();
      const barRect = filterBarRef.current.getBoundingClientRect();
      indicatorRef.current.style.width = `${btnRect.width}px`;
      indicatorRef.current.style.left = `${btnRect.left - barRect.left}px`;
    }
  }, [activeIndex, filteredData]);

  const handleFilterChange = (category, index) => {
    setFilter(category);
    setActiveIndex(index);
  };

  const columns = [[], [], [], []];
  filteredData.forEach((item, index) => {
    columns[index % 4].push(item);
  });

  return (
    <section className="gallery-section">
      {/* <div className="gallery-header">
        <h2 className="gallery-title">Preschool Life Moments</h2>
        <p className="gallery-subtitle">Capturing joyful learning experiences</p>
      </div> */}

  {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">P r e s c h o o l &nbsp;&nbsp; L i f e &nbsp;&nbsp; M o m e n t s</h1>
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

      {/* Filter Bar */}
      <div className="filter-container">
        <div className="filter-bar" ref={filterBarRef}>
          <div className="filter-indicator" ref={indicatorRef}></div>
          {["all", "activities", "classrooms", "play-areas", "celebrations"].map(
            (cat, idx) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
                onClick={() => handleFilterChange(cat, idx)}
                ref={(el) => (btnRefs.current[idx] = el)}
              >
                {cat.replace("-", " ").charAt(0).toUpperCase() + cat.replace("-", " ").slice(1)}
              </button>
            )
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="staggered-gallery">
        {columns.map((col, colIdx) => (
          <div className="column" key={colIdx}>
            {col.map((item, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={item.img} alt={item.alt}  loading="lazy"/>
                <span className="category-tag">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1).replace("-", " ")}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;


// old code is below
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import "./Gallery.css";

// const Gallery = () => {
//   const [filter, setFilter] = useState("all");
//   const [fetchedData, setFetchedData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const filterBarRef = useRef(null);
//   const indicatorRef = useRef(null);
//   const btnRefs = useRef([]);

//   const categoryList = ["all", "activities", "classrooms", "play-areas", "celebrations"];

//   // Fetch data using Axios when filter changes
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const url =
//           filter === "all"
//             ? `${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=gallery`
//             : `${import.meta.env.VITE_BACKEND_URL}/api/images/getimages?section=gallery&category=${filter}`;

//         const res = await axios.get(url);
//         if (res.data.success) {
//           setFetchedData(res.data.images);
//           console.log("Fetched images:", res.data.images);

//         } else {
//           setFetchedData([]);
//         }
//       } catch (error) {
//         console.error("Error fetching gallery images:", error);
//         setFetchedData([]);
//       }
//     };

//     fetchImages();
//   }, [filter]);

//   useEffect(() => {
//     setFilteredData(fetchedData);
//   }, [fetchedData]);

//   useEffect(() => {
//     const activeBtn = btnRefs.current[activeIndex];
//     if (activeBtn && filterBarRef.current && indicatorRef.current) {
//       const btnRect = activeBtn.getBoundingClientRect();
//       const barRect = filterBarRef.current.getBoundingClientRect();
//       indicatorRef.current.style.width = `${btnRect.width}px`;
//       indicatorRef.current.style.left = `${btnRect.left - barRect.left}px`;
//     }
//   }, [activeIndex, filteredData]);

//   const handleFilterChange = (category, index) => {
//     setFilter(category);
//     setActiveIndex(index);
//   };

//   const columns = [[], [], [], []];
//   filteredData.forEach((item, index) => {
//     columns[index % 4].push(item);
//   });

//   return (
//     <section className="gallery-section">
//       <div className="why-title-container">
//         <h1 className="why-section-title">
//           P r e s c h o o l &nbsp;&nbsp; L i f e &nbsp;&nbsp; M o m e n t s
//         </h1>
//         <div className="underline-container"></div>
//       </div>

//       {/* Filter Bar */}
//       <div className="filter-container">
//         <div className="filter-bar" ref={filterBarRef}>
//           <div className="filter-indicator" ref={indicatorRef}></div>
//           {categoryList.map((cat, idx) => (
//             <button
//               key={cat}
//               className={`filter-btn ${filter === cat ? "active" : ""}`}
//               onClick={() => handleFilterChange(cat, idx)}
//               ref={(el) => (btnRefs.current[idx] = el)}
//             >
//               {cat.replace("-", " ").charAt(0).toUpperCase() + cat.replace("-", " ").slice(1)}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       {/* <div className="staggered-gallery">
//         {columns.map((col, colIdx) => (
//           <div className="column" key={colIdx}>
//             {col.reverse().map((item, idx) => (
//               <div className="gallery-item" key={idx}>
//                 <img src={`${import.meta.env.VITE_BACKEND_URL}${item.imageUrl}`} alt={item.title || item.category} />
//                 <span className="category-tag">
//                   {item.category
//                     ? item.category.charAt(0).toUpperCase() + item.category.slice(1).replace("-", " ")
//                     : "No Category"}
//                 </span>

//               </div>
//             ))}
//           </div>
//         ))}
//       </div> */}

//       <div className="staggered-gallery">
//         {filteredData.map((item, idx) => (
//           <div className="gallery-item" key={idx}>
//             <img src={`${item.imageUrl}`} alt={item.title || item.category} />
//             <span className="category-tag">
//               {item.category.charAt(0).toUpperCase() +
//                 item.category.slice(1).replace("-", " ")}
//             </span>
//           </div>
//         )).reverse()}
//       </div>

//     </section>
//   );
// };

// export default Gallery;
