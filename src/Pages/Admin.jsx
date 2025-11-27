import { useState, useEffect, useRef } from 'react';
import { 
  FaTachometerAlt, FaHome, FaInfoCircle, FaQuestionCircle, FaImages, 
  FaUsers, FaCalendarAlt, FaEnvelope, FaCog, FaSignOutAlt, 
  FaSearch, FaBell, FaPlus, FaSyncAlt, FaUpload, FaPencilAlt, 
  FaTrash, FaCloudUploadAlt, FaFolderOpen, FaTimes, FaSave, 
  FaImage, FaTimesCircle
} from 'react-icons/fa';

import './Admin.css'

const Admin = () => {
  // State for active section
  const [currentSection, setCurrentSection] = useState('home-images');
  
  // Modal states
  const [showImageModal, setShowImageModal] = useState(false);
  const [showBulkModal, setShowBulkModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  
  // Form states
  const [modalTitle, setModalTitle] = useState('Upload New Image');
  const [imagePreview, setImagePreview] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState(null);
  const [bulkFiles, setBulkFiles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Form data
  const [formData, setFormData] = useState({
    imagePage: '',
    imageSection: '',
    imageTitle: '',
    imageDescription: '',
    imageCategory: ''
  });
  
  const [editFormData, setEditFormData] = useState({
    editImageTitle: 'Sample Image Title',
    editImagePosition: '1',
    editImageDescription: 'Sample image description',
    editImageCategory: 'activities'
  });
  
  // Refs for file inputs
  const fileInputRef = useRef(null);
  const bulkFileInputRef = useRef(null);
  const editFileInputRef = useRef(null);
  
  // Gallery images data
  const galleryImages = [
    {
      id: 'gallery1',
      category: 'activities',
      title: 'Art Class',
      description: 'Category: Activities',
      src: 'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '1.8MB',
      dimensions: '1200×800'
    },
    {
      id: 'gallery2',
      category: 'classrooms',
      title: 'Morning Circle',
      description: 'Category: Classrooms',
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '1.9MB',
      dimensions: '1200×800'
    },
    {
      id: 'gallery3',
      category: 'play-areas',
      title: 'Outdoor Play',
      description: 'Category: Play Areas',
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '2.0MB',
      dimensions: '1200×800'
    },
    {
      id: 'gallery4',
      category: 'celebrations',
      title: 'Birthday Party',
      description: 'Category: Celebrations',
      src: 'https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '1.7MB',
      dimensions: '1200×800'
    },
    {
      id: 'gallery5',
      category: 'activities',
      title: 'Music Time',
      description: 'Category: Activities',
      src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '1.8MB',
      dimensions: '1200×800'
    },
    {
      id: 'gallery6',
      category: 'classrooms',
      title: 'Reading Corner',
      description: 'Category: Classrooms',
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      size: '1.9MB',
      dimensions: '1200×800'
    }
  ];
  
  const filteredGalleryImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);
  
  // Helper functions
  const pageToName = (page) => {
    const names = {
      'home': 'Home Page',
      'about': 'About Page',
      'why-htps': 'Why HTPS Page',
      'gallery': 'Gallery Page'
    };
    return names[page] || page;
  };
  
  const sectionToName = (section) => {
    const names = {
      'concept-room': 'Concept Room',
      'hero-banner': 'Hero Banner',
      'our-legacy': 'Our Legacy',
      'environment': 'Our Environment',
      'community': 'Our Community',
      'gallery': 'Gallery'
    };
    return names[section] || section;
  };
  
  // Section navigation
  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
  };
  
  // Modal handlers
  const openImageModal = (page = '', section = '') => {
    let title = 'Upload New Image';
    if (page && section) {
      title = `Upload Image for ${pageToName(page)} > ${sectionToName(section)}`;
    }
    
    setModalTitle(title);
    setFormData({
      ...formData,
      imagePage: page || '',
      imageSection: section || ''
    });
    setImagePreview(null);
    setShowImageModal(true);
  };
  
  const openBulkUploadModal = (page = '', section = '') => {
    setFormData({
      ...formData,
      imagePage: page || '',
      imageSection: section || ''
    });
    setBulkFiles([]);
    setShowBulkModal(true);
  };
  
  const openEditModal = (imageId) => {
    // In a real app, we would fetch the image data here
    setEditFormData({
      editImageTitle: 'Sample Image Title',
      editImagePosition: '1',
      editImageDescription: 'Sample image description',
      editImageCategory: 'activities'
    });
    setEditImagePreview(null);
    setShowEditModal(true);
  };
  
  const closeModal = () => {
    setShowImageModal(false);
    setShowBulkModal(false);
    setShowEditModal(false);
  };
  
  // Form handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };
  
  // File handlers
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file (JPEG, PNG)');
    }
  };
  
  const handleBulkFileChange = (e) => {
    const files = Array.from(e.target.files).filter(file => file.type.match('image.*'));
    setBulkFiles(files);
  };
  
  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEditImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file (JPEG, PNG)');
    }
  };
  
  // Action handlers
  const uploadImage = () => {
    alert('Image uploaded successfully! (This is a demo)');
    closeModal();
  };
  
  const uploadBulkImages = () => {
    alert('Bulk images uploaded successfully! (This is a demo)');
    closeModal();
  };
  
  const saveImageChanges = () => {
    alert('Image changes saved successfully! (This is a demo)');
    closeModal();
  };
  
  const confirmDelete = (imageId) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      alert(`Image ${imageId} deleted successfully! (This is a demo)`);
    }
  };
  
  const deleteImage = () => {
    if (window.confirm('Are you sure you want to permanently delete this image?')) {
      alert('Image deleted successfully! (This is a demo)');
      closeModal();
    }
  };
  
  const filterGallery = (category) => {
    setActiveFilter(category);
  };
  
  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.borderColor = 'var(--primary)';
    e.currentTarget.style.backgroundColor = 'var(--primary-light)';
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.borderColor = 'var(--page-line)';
    e.currentTarget.style.backgroundColor = 'var(--light)';
  };
  
  const handleDrop = (e, isBulk = false) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.borderColor = 'var(--page-line)';
    e.currentTarget.style.backgroundColor = 'var(--light)';
    
    const files = e.dataTransfer.files;
    if (files.length) {
      if (isBulk) {
        handleBulkFileChange({ target: { files } });
      } else {
        handleFileChange({ target: { files: [files[0]] } });
      }
    }
  };
  
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1864/1864593.png" alt="Preschool Logo" />
          <h2>Little Explorers</h2>
        </div>
        <div className="sidebar-menu">
          <div className="menu-category">Dashboard</div>
          <div className={`menu-item ${currentSection === 'home-images' ? 'active' : ''}`}>
            <FaTachometerAlt />
            <span>Overview</span>
          </div>
          
          <div className="menu-category">Content Management</div>
          <div 
            className={`menu-item ${currentSection === 'home-images' ? 'active' : ''}`}
            onClick={() => showSection('home-images')}
          >
            <FaHome />
            <span>Home Page</span>
          </div>
          <div 
            className={`menu-item ${currentSection === 'about-images' ? 'active' : ''}`}
            onClick={() => showSection('about-images')}
          >
            <FaInfoCircle />
            <span>About Page</span>
          </div>
          <div 
            className={`menu-item ${currentSection === 'why-htps-images' ? 'active' : ''}`}
            onClick={() => showSection('why-htps-images')}
          >
            <FaQuestionCircle />
            <span>Why HTPS Page</span>
          </div>
          <div 
            className={`menu-item ${currentSection === 'gallery-images' ? 'active' : ''}`}
            onClick={() => showSection('gallery-images')}
          >
            <FaImages />
            <span>Gallery Page</span>
            <div className="badge">New</div>
          </div>
          
          <div className="menu-category">Management</div>
          <div className="menu-item">
            <FaUsers />
            <span>Students</span>
          </div>
          <div className="menu-item">
            <FaCalendarAlt />
            <span>Events</span>
          </div>
          <div className="menu-item">
            <FaEnvelope />
            <span>Messages</span>
            <div className="badge">5</div>
          </div>
          
          <div className="menu-category">Settings</div>
          <div className="menu-item">
            <FaCog />
            <span>Settings</span>
          </div>
          <div className="menu-item">
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Image Management Dashboard</h1>
          <div className="header-actions">
            <div className="search-bar">
              <FaSearch />
              <input type="text" placeholder="Search images..." />
            </div>
            <div className="notification-bell">
              <FaBell />
              <div className="notification-badge">3</div>
            </div>
            <div className="user-info">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Admin" className="user-avatar" />
              <span className="user-name">Sarah Johnson</span>
            </div>
          </div>
        </div>

        {/* Home Page Images Section */}
        <div className="section" id="home-images" style={{ display: currentSection === 'home-images' ? 'block' : 'none' }}>
          <div className="section-header">
            <div className="section-title">
              <div className="icon">
                <FaHome />
              </div>
              <h2>Home Page Images</h2>
            </div>
            <div className="section-actions">
              <button className="btn btn-outline">
                <FaSyncAlt /> Refresh
              </button>
              <button className="btn btn-primary" onClick={() => openImageModal('home', 'hero-banner')}>
                <FaPlus /> Add Image
              </button>
            </div>
          </div>
          
          {/* Concept Room Section */}
          <div className="image-grid-container">
            <div className="image-grid-controls">
              <h3>Concept Room Section (6 images)</h3>
              <button className="btn btn-secondary btn-sm" onClick={() => openBulkUploadModal('home', 'concept-room')}>
                <FaUpload /> Bulk Upload
              </button>
            </div>
            <div className="image-grid">
              {/* Image cards would be rendered here */}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div className="image-card" key={`img${num}`}>
                  <div className="image-card-actions">
                    <button className="action-btn edit" onClick={() => openEditModal(`img${num}`)}>
                      <FaPencilAlt />
                    </button>
                    <button className="action-btn delete" onClick={() => confirmDelete(`img${num}`)}>
                      <FaTrash />
                    </button>
                  </div>
                  <div className="image-preview">
                    <img 
                      src={`https://images.unsplash.com/photo-${num % 3 === 0 ? '1577896851231-70ef18881754' : num % 2 === 0 ? '1588072432836-e10032774350' : '1605106702734-205df224ecce'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} 
                      alt={`Concept Room ${num}`} 
                    />
                  </div>
                  <div className="image-info">
                    <h4>Concept Room {num}</h4>
                    <p>Position: {num <= 3 ? `Top ${num === 1 ? 'Left' : num === 2 ? 'Center' : 'Right'}` : `Bottom ${num === 4 ? 'Left' : num === 5 ? 'Center' : 'Right'}`}</p>
                    <div className="image-meta">
                      <span>{(1.1 + (num * 0.1)).toFixed(1)}MB</span>
                      <span>1200×800</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Page Images Section */}
        <div className="section" id="about-images" style={{ display: currentSection === 'about-images' ? 'block' : 'none' }}>
          <div className="section-header">
            <div className="section-title">
              <div className="icon">
                <FaInfoCircle />
              </div>
              <h2>About Page Images</h2>
            </div>
            <div className="section-actions">
              <button className="btn btn-outline">
                <FaSyncAlt /> Refresh
              </button>
              <button className="btn btn-primary" onClick={() => openImageModal('about', 'our-legacy')}>
                <FaPlus /> Add Image
              </button>
            </div>
          </div>
          
          {/* Our Legacy Section */}
          <div className="image-grid-container">
            <div className="image-grid-controls">
              <h3>Our Legacy Section (1 image)</h3>
            </div>
            <div className="image-grid">
              <div className="image-card">
                <div className="image-card-actions">
                  <button className="action-btn edit" onClick={() => openEditModal('legacy-img')}>
                    <FaPencilAlt />
                  </button>
                  <button className="action-btn delete" onClick={() => confirmDelete('legacy-img')}>
                    <FaTrash />
                  </button>
                </div>
                <div className="image-preview">
                  <img src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Our Legacy" />
                </div>
                <div className="image-info">
                  <h4>Our Legacy</h4>
                  <p>Section: History Timeline</p>
                  <div className="image-meta">
                    <span>2.1MB</span>
                    <span>1600×900</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Environment Section */}
          <div className="image-grid-container" style={{ marginTop: '30px' }}>
            <div className="image-grid-controls">
              <h3>Our Environment Section (4 images)</h3>
              <button className="btn btn-secondary btn-sm" onClick={() => openBulkUploadModal('about', 'environment')}>
                <FaUpload /> Bulk Upload
              </button>
            </div>
            <div className="image-grid">
              {/* Environment images would be rendered here */}
              {[1, 2, 3, 4].map((num) => (
                <div className="image-card" key={`env${num}`}>
                  <div className="image-card-actions">
                    <button className="action-btn edit" onClick={() => openEditModal(`env${num}`)}>
                      <FaPencilAlt />
                    </button>
                    <button className="action-btn delete" onClick={() => confirmDelete(`env${num}`)}>
                      <FaTrash />
                    </button>
                  </div>
                  <div className="image-preview">
                    <img 
                      src={`https://images.unsplash.com/photo-${num % 3 === 0 ? '1577896851231-70ef18881754' : num % 2 === 0 ? '1588072432836-e10032774350' : '1605106702734-205df224ecce'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} 
                      alt={`Environment ${num}`} 
                    />
                  </div>
                  <div className="image-info">
                    <h4>{['Classroom 1', 'Playground', 'Library', 'Cafeteria'][num - 1]}</h4>
                    <p>Position: {num}</p>
                    <div className="image-meta">
                      <span>{(1.7 + (num * 0.1)).toFixed(1)}MB</span>
                      <span>1200×800</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why HTPS Page Images Section */}
        <div className="section" id="why-htps-images" style={{ display: currentSection === 'why-htps-images' ? 'block' : 'none' }}>
          <div className="section-header">
            <div className="section-title">
              <div className="icon">
                <FaQuestionCircle />
              </div>
              <h2>Why HTPS Page Images</h2>
            </div>
            <div className="section-actions">
              <button className="btn btn-outline">
                <FaSyncAlt /> Refresh
              </button>
              <button className="btn btn-primary" onClick={() => openImageModal('why-htps', 'community')}>
                <FaPlus /> Add Image
              </button>
            </div>
          </div>
          
          {/* Our Community Section */}
          <div className="image-grid-container">
            <div className="image-grid-controls">
              <h3>Our Community Section</h3>
              <button className="btn btn-secondary btn-sm" onClick={() => openBulkUploadModal('why-htps', 'community')}>
                <FaUpload /> Bulk Upload
              </button>
            </div>
            <div className="image-grid">
              {/* Community images would be rendered here */}
              {[1, 2, 3, 4].map((num) => (
                <div className="image-card" key={`comm${num}`}>
                  <div className="image-card-actions">
                    <button className="action-btn edit" onClick={() => openEditModal(`comm${num}`)}>
                      <FaPencilAlt />
                    </button>
                    <button className="action-btn delete" onClick={() => confirmDelete(`comm${num}`)}>
                      <FaTrash />
                    </button>
                  </div>
                  <div className="image-preview">
                    <img 
                      src={`https://images.unsplash.com/photo-${num % 3 === 0 ? '1577896851231-70ef18881754' : num % 2 === 0 ? '1588072432836-e10032774350' : '1605106702734-205df224ecce'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`} 
                      alt={`Community ${num}`} 
                    />
                  </div>
                  <div className="image-info">
                    <h4>Community Event {num}</h4>
                    <p>Category: {['Family Day', 'Science Fair', 'Art Exhibition', 'Sports Day'][num - 1]}</p>
                    <div className="image-meta">
                      <span>{(1.9 + (num * 0.1)).toFixed(1)}MB</span>
                      <span>1200×800</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Page Images Section */}
        <div className="section" id="gallery-images" style={{ display: currentSection === 'gallery-images' ? 'block' : 'none' }}>
          <div className="section-header">
            <div className="section-title">
              <div className="icon">
                <FaImages />
              </div>
              <h2>Gallery Page Images</h2>
            </div>
            <div className="section-actions">
              <button className="btn btn-outline">
                <FaSyncAlt /> Refresh
              </button>
              <button className="btn btn-primary" onClick={() => openImageModal('gallery', 'all')}>
                <FaPlus /> Add Image
              </button>
            </div>
          </div>
          
          {/* Gallery Section with Filters */}
          <div className="image-grid-container">
            <div className="image-grid-controls">
              <div className="filter-tabs">
                <button 
                  className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`} 
                  onClick={() => filterGallery('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'activities' ? 'active' : ''}`} 
                  onClick={() => filterGallery('activities')}
                >
                  Activities
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'classrooms' ? 'active' : ''}`} 
                  onClick={() => filterGallery('classrooms')}
                >
                  Classrooms
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'play-areas' ? 'active' : ''}`} 
                  onClick={() => filterGallery('play-areas')}
                >
                  Play Areas
                </button>
                <button 
                  className={`filter-tab ${activeFilter === 'celebrations' ? 'active' : ''}`} 
                  onClick={() => filterGallery('celebrations')}
                >
                  Celebrations
                </button>
              </div>
              <button className="btn btn-secondary btn-sm" onClick={() => openBulkUploadModal('gallery', 'all')}>
                <FaUpload /> Bulk Upload
              </button>
            </div>
            <div className="image-grid" id="gallery-grid">
              {filteredGalleryImages.map((image) => (
                <div className="image-card" key={image.id} data-category={image.category}>
                  <div className="image-card-actions">
                    <button className="action-btn edit" onClick={() => openEditModal(image.id)}>
                      <FaPencilAlt />
                    </button>
                    <button className="action-btn delete" onClick={() => confirmDelete(image.id)}>
                      <FaTrash />
                    </button>
                  </div>
                  <div className="image-preview">
                    <img src={image.src} alt={image.title} />
                  </div>
                  <div className="image-info">
                    <h4>{image.title}</h4>
                    <p>{image.description}</p>
                    <div className="image-meta">
                      <span>{image.size}</span>
                      <span>{image.dimensions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fab" onClick={() => openImageModal('quick-upload')}>
        <FaPlus />
      </button>

      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="modal show" id="imageModal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{modalTitle}</h2>
              <span className="close-modal" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
              <form id="imageUploadForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="imagePage">Page</label>
                    <select 
                      id="imagePage" 
                      name="imagePage"
                      value={formData.imagePage}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Page</option>
                      <option value="home">Home Page</option>
                      <option value="about">About Page</option>
                      <option value="why-htps">Why HTPS Page</option>
                      <option value="gallery">Gallery Page</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageSection">Section</label>
                    <select 
                      id="imageSection" 
                      name="imageSection"
                      value={formData.imageSection}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Section</option>
                      <option value="concept-room">Concept Room</option>
                      <option value="hero-banner">Hero Banner</option>
                      <option value="our-legacy">Our Legacy</option>
                      <option value="environment">Our Environment</option>
                      <option value="community">Our Community</option>
                      <option value="gallery">Gallery</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="imageTitle">Title</label>
                  <input 
                    type="text" 
                    id="imageTitle" 
                    name="imageTitle"
                    value={formData.imageTitle}
                    onChange={handleFormChange}
                    placeholder="Enter image title"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="imageDescription">Description</label>
                  <textarea 
                    id="imageDescription" 
                    name="imageDescription"
                    value={formData.imageDescription}
                    onChange={handleFormChange}
                    placeholder="Enter image description"
                    rows="3"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="imageCategory">Category</label>
                  <select 
                    id="imageCategory" 
                    name="imageCategory"
                    value={formData.imageCategory}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Category</option>
                    <option value="activities">Activities</option>
                    <option value="classrooms">Classrooms</option>
                    <option value="play-areas">Play Areas</option>
                    <option value="celebrations">Celebrations</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Upload Image</label>
                  <div 
                    className="file-upload" 
                    id="dropArea"
                    onClick={() => fileInputRef.current.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, false)}
                  >
                    <FaCloudUploadAlt className="upload-icon" />
                    <h4>Drag & drop your image here</h4>
                    <p>or click to browse files</p>
                    <p className="text-muted">Supports JPG, PNG up to 5MB</p>
                    <button 
                      type="button" 
                      className="btn btn-outline"
                    >
                      <FaFolderOpen /> Select File
                    </button>
                    <input 
                      type="file" 
                      id="fileInput" 
                      ref={fileInputRef}
                      accept="image/*" 
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                  {imagePreview && (
                    <div className="preview-container" id="previewContainer">
                      <img src={imagePreview} alt="Preview" className="preview-image" />
                      <button 
                        type="button" 
                        className="btn btn-outline"
                        onClick={() => {
                          setImagePreview(null);
                          fileInputRef.current.value = '';
                        }}
                      >
                        <FaTimes /> Change Image
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={closeModal}>
                <FaTimes /> Cancel
              </button>
              <button className="btn btn-primary" onClick={uploadImage}>
                <FaUpload /> Upload Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Upload Modal */}
      {showBulkModal && (
        <div className="modal show" id="bulkUploadModal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Bulk Image Upload</h2>
              <span className="close-modal" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
              <form id="bulkUploadForm">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="bulkPage">Page</label>
                    <select 
                      id="bulkPage" 
                      name="imagePage"
                      value={formData.imagePage}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Page</option>
                      <option value="home">Home Page</option>
                      <option value="about">About Page</option>
                      <option value="why-htps">Why HTPS Page</option>
                      <option value="gallery">Gallery Page</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="bulkSection">Section</label>
                    <select 
                      id="bulkSection" 
                      name="imageSection"
                      value={formData.imageSection}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select Section</option>
                      <option value="concept-room">Concept Room</option>
                      <option value="environment">Our Environment</option>
                      <option value="community">Our Community</option>
                      <option value="gallery">Gallery</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="bulkCategory">Category</label>
                  <select 
                    id="bulkCategory" 
                    name="imageCategory"
                    value={formData.imageCategory}
                    onChange={handleFormChange}
                  >
                    <option value="">Select Category</option>
                    <option value="activities">Activities</option>
                    <option value="classrooms">Classrooms</option>
                    <option value="play-areas">Play Areas</option>
                    <option value="celebrations">Celebrations</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Upload Multiple Images</label>
                  <div 
                    className="file-upload" 
                    id="bulkDropArea"
                    onClick={() => bulkFileInputRef.current.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, true)}
                  >
                    <FaCloudUploadAlt className="upload-icon" />
                    <h4>Drag & drop multiple images here</h4>
                    <p>or click to browse files</p>
                    <p className="text-muted">Supports JPG, PNG up to 5MB each</p>
                    <button 
                      type="button" 
                      className="btn btn-outline"
                    >
                      <FaFolderOpen /> Select Files
                    </button>
                    <input 
                      type="file" 
                      id="bulkFileInput" 
                      ref={bulkFileInputRef}
                      accept="image/*" 
                      multiple 
                      onChange={handleBulkFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                  {bulkFiles.length > 0 && (
                    <div id="bulkPreviewContainer" style={{ marginTop: '20px' }}>
                      <div id="bulkFileList" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                        {bulkFiles.map((file, index) => (
                          <div key={index} className="file-item">
                            <div style={{ display: 'flex', alignItems: 'center', padding: '8px', borderBottom: '1px solid #eee' }}>
                              <FaImage style={{ marginRight: '10px', color: 'var(--primary)' }} />
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: '500' }}>{file.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--dark-light)' }}>
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={closeModal}>
                <FaTimes /> Cancel
              </button>
              <button className="btn btn-primary" onClick={uploadBulkImages}>
                <FaUpload /> Upload All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Image Modal */}
      {showEditModal && (
        <div className="modal show" id="editModal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Edit Image</h2>
              <span className="close-modal" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
              <form id="editImageForm">
                <div className="form-group">
                  <label>Current Image</label>
                  <img 
                    src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                    alt="Current Image" 
                    className="preview-image" 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="editImageTitle">Title</label>
                    <input 
                      type="text" 
                      id="editImageTitle" 
                      name="editImageTitle"
                      value={editFormData.editImageTitle}
                      onChange={handleEditFormChange}
                      placeholder="Image title"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editImagePosition">Position</label>
                    <input 
                      type="text" 
                      id="editImagePosition" 
                      name="editImagePosition"
                      value={editFormData.editImagePosition}
                      onChange={handleEditFormChange}
                      placeholder="Position in section"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="editImageDescription">Description</label>
                  <textarea 
                    id="editImageDescription" 
                    name="editImageDescription"
                    value={editFormData.editImageDescription}
                    onChange={handleEditFormChange}
                    placeholder="Image description (optional)"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="editImageCategory">Category</label>
                  <select 
                    id="editImageCategory" 
                    name="editImageCategory"
                    value={editFormData.editImageCategory}
                    onChange={handleEditFormChange}
                  >
                    <option value="">Select Category</option>
                    <option value="activities">Activities</option>
                    <option value="classrooms">Classrooms</option>
                    <option value="play-areas">Play Areas</option>
                    <option value="celebrations">Celebrations</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Replace Image (optional)</label>
                  <div 
                    className="file-upload" 
                    id="editDropArea"
                    onClick={() => editFileInputRef.current.click()}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, false)}
                  >
                    <FaCloudUploadAlt className="upload-icon" />
                    <h4>Upload new image to replace</h4>
                    <p>or click to browse files</p>
                    <input 
                      type="file" 
                      id="editFileInput" 
                      ref={editFileInputRef}
                      accept="image/*" 
                      onChange={handleEditFileChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                  {editImagePreview && (
                    <div className="preview-container" id="editPreviewContainer">
                      <img src={editImagePreview} alt="New Preview" className="preview-image" />
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" onClick={deleteImage}>
                <FaTrash /> Delete
              </button>
              <button className="btn btn-outline" onClick={closeModal}>
                <FaTimes /> Cancel
              </button>
              <button className="btn btn-primary" onClick={saveImageChanges}>
                <FaSave /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;