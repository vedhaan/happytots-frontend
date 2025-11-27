import { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application. We will contact you shortly.');
    e.target.reset();
  };

  const faqs = [
    {
      question: "What age groups do you accept at HappyTots?",
      answer: "We welcome children from 18 months to 5 years old, with specialized programs tailored to each developmental stage. Our Toddler Program serves 18-30 months, Preschool for 2.5-4 years, and Pre-K for 4-5 year olds."
    },
    {
      question: "What makes your curriculum unique?",
      answer: "Our research-backed curriculum blends Montessori principles with STEM activities and social-emotional learning. We focus on hands-on exploration, creative expression, and developing critical thinking skills appropriate for each age group."
    },
    {
      question: "What safety measures are in place?",
      answer: "Safety is our top priority. Our facility features secure keycard entry, 24/7 monitoring, certified staff trained in pediatric first aid/CPR, and rigorous cleanliness protocols. All visitors are screened, and we maintain strict pick-up authorization procedures."
    },
    {
      question: "What are your teacher qualifications?",
      answer: "All lead teachers hold degrees in Early Childhood Education or related fields, with assistant teachers completing specialized training. Our staff participates in ongoing professional development and maintains current certifications in health/safety protocols."
    }
  ];

  return (
    <main className="container">
      <section>
        {/* <div className="section-title">
          <h2>Admission Process</h2>
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
            {/* <p className="subtitle">Nurturing creativity and growth</p> */}
          </div>
        
        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>
            <h3>Initial Inquiry</h3>
            <p>Contact us to learn about our programs and schedule a visit.</p>
          </div>
          
          <div className="process-card">
            <div className="process-number">02</div>
            <h3>Campus Tour</h3>
            <p>Experience our facilities and meet our educators in person.</p>
          </div>
          
          <div className="process-card">
            <div className="process-number">03</div>
            <h3>Application</h3>
            <p>Submit your application with required documentation.</p>
          </div>
          
          <div className="process-card">
            <div className="process-number">04</div>
            <h3>Enrollment</h3>
            <p>Complete registration and prepare for the first day.</p>
          </div>
        </div>
      </section>

      <div className="form-container">
        <div className="form-content">
          <h2>Begin Your Child's Educational Journey</h2>
          <p>Our admissions team is ready to guide you through every step of the process.</p>
          
          <ul className="benefits">
            <li>Personalized admissions consultation</li>
            <li>Flexible scheduling options</li>
            <li>Small class sizes with individual attention</li>
            <li>Developmentally appropriate curriculum</li>
          </ul>
        </div>
        
        <form className="admission-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Child's Full Name</label>
            <input type="text" required />
          </div>
          
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" required />
          </div>
          
          <div className="form-group">
            <label>Program Interest</label>
            <select required>
              <option value="">Select Program</option>
              <option>Toddler Program</option>
              <option>Preschool Program</option>
              <option>Pre-K Program</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Parent Name</label>
            <input type="text" required />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required />
          </div>
          
          <button type="submit" className="btn">Submit Application</button>
        </form>
      </div>

      {/* FAQ Section */}
      <section className="faq-section">
        {/* <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div> */}

        
                  {/* Title Section */}
          <div className="why-title-container">
            <h1 className="why-section-title">F A Q</h1>
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
        
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <div className="icon">
                  <i className={`fas ${activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </div>
              </div>
              <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Admission;