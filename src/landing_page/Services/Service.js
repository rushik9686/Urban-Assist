import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaArrowRight } from 'react-icons/fa';

const services = [
  {
    category: 'Doctors',
    services: [
      { name: 'Portfolio Management', description: 'Manage your investment portfolio with expert advice.', image: 'portfolio.jpg', details: 'Detailed information about Portfolio Management.', images: ['image1.jpg', 'image2.jpg'], firm: 'Wealth Advisers', reviews: 'Excellent service!' },
      { name: 'Mutual Fund Advisory', description: 'Get guidance on the best mutual funds to invest in.', image: 'mutualfund.jpg', details: 'Detailed information about Mutual Fund Advisory.', images: ['image3.jpg', 'image4.jpg'], firm: 'Invest Smart', reviews: 'Very helpful!' },
      { name: 'Stock Market Advisory', description: 'Expert advice on stock market investments.', image: 'stockmarket.jpg', details: 'Detailed information about Stock Market Advisory.', images: ['image5.jpg', 'image6.jpg'], firm: 'Market Gurus', reviews: 'Very professional!' },
      { name: 'Fixed Income Advisory', description: 'Secure investments with fixed income options.', image: 'fixedincome.jpg', details: 'Detailed information about Fixed Income Advisory.', images: ['image7.jpg', 'image8.jpg'], firm: 'Secure Investments', reviews: 'Highly recommended!' },
      { name: 'Real Estate Investment Advisory', description: 'Invest in real estate with confidence.', image: 'realestate.jpg', details: 'Detailed information about Real Estate Investment Advisory.', images: ['image9.jpg', 'image10.jpg'], firm: 'Property Pros', reviews: 'Great advice!' },
      { name: 'Retirement Planning', description: 'Plan for a secure and comfortable retirement.', image: 'retirement.jpg', details: 'Detailed information about Retirement Planning.', images: ['image11.jpg', 'image12.jpg'], firm: 'Future Secure', reviews: 'Very useful!' },
      { name: 'Wealth Management', description: 'Manage and grow your wealth efficiently.', image: 'wealth.jpg', details: 'Detailed information about Wealth Management.', images: ['image13.jpg', 'image14.jpg'], firm: 'Wealth Masters', reviews: 'Excellent!' },
      { name: 'Load More...', description: 'View more services in this category.', details: 'Redirect to Doctors page.' },
    ],
  },
  {
    category: 'Teachers',
    services: [
      { name: 'Financial Planning', description: 'Create a comprehensive financial plan.', image: 'financialplanning.jpg', details: 'Detailed information about Financial Planning.', images: ['image17.jpg', 'image18.jpg'], firm: 'Plan Well', reviews: 'Very thorough!' },
      { name: 'Tax Planning', description: 'Optimize your tax liabilities with expert advice.', image: 'taxplanning.jpg', details: 'Detailed information about Tax Planning.', images: ['image19.jpg', 'image20.jpg'], firm: 'Tax Experts', reviews: 'Saved a lot on taxes!' },
      { name: 'Estate Planning', description: 'Plan for the distribution of your estate.', image: 'estateplanning.jpg', details: 'Detailed information about Estate Planning.', images: ['image21.jpg', 'image22.jpg'], firm: 'Estate Managers', reviews: 'Very professional!' },
      { name: 'Insurance Advisory', description: 'Get advice on the best insurance policies.', image: 'insurance.jpg', details: 'Detailed information about Insurance Advisory.', images: ['image23.jpg', 'image24.jpg'], firm: 'Secure Life', reviews: 'Helped me choose the right policy!' },
      { name: 'Risk Management', description: 'Identify and mitigate financial risks.', image: 'riskmanagement.jpg', details: 'Detailed information about Risk Management.', images: ['image25.jpg', 'image26.jpg'], firm: 'Risk Experts', reviews: 'Very informative!' },
      { name: 'Cash Flow Management', description: 'Manage your cash flow efficiently.', image: 'cashflow.jpg', details: 'Detailed information about Cash Flow Management.', images: ['image27.jpg', 'image28.jpg'], firm: 'Flow Managers', reviews: 'Helped manage my cash flow!' },
      { name: 'Debt Management', description: 'Plan and manage your debt effectively.', image: 'debtmanagement.jpg', details: 'Detailed information about Debt Management.', images: ['image29.jpg', 'image30.jpg'], firm: 'Debt Helpers', reviews: 'Great assistance with debt!' },
      { name: 'Load More...', description: 'View more services in this category.', details: 'Redirect to Teachers page.' },
    ],
  },
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({ name: '', email: '', date: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1).replace(/-/g, ' ');
    const foundService = services.flatMap(category => category.services)
      .find(service => service.name.toLowerCase() === hash.toLowerCase());
    if (foundService) {
      setSelectedService(foundService);
    }
  }, []);

  const handleCardClick = (service) => {
    if (service.name === 'Load More...') {
      navigate(`/${service.details.split(' ')[2].toLowerCase()}`);
    } else {
      setSelectedService(service);
    }
  };

  const handleClosePopup = () => {
    setSelectedService(null);
    setAppointmentDetails({ name: '', email: '', date: '' }); // Reset the form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the booking logic, like sending the data to a server
    alert(`Appointment booked for ${appointmentDetails.name} on ${appointmentDetails.date}`);
    handleClosePopup(); // Close popup after booking
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    servicesPage: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f6f9',
      marginTop: '3rem',
    },
    serviceCategory: {
      marginBottom: '60px',
      padding: '20px',
    },
    serviceCategoryH2: {
      borderBottom: '2px solid #007aff',
      paddingBottom: '10px',
      color: '#003366',
      fontSize: '2rem',
      fontFamily: 'Georgia, serif',
    },
    serviceCards: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    serviceCard: {
      flex: '1 1 22%',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      position: 'relative',
      transition: 'all 0.3s ease',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    serviceName: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#333',
      margin: '10px 0',
    },
    readMore: {
      background: 'none',
      color: '#007aff',
      textDecoration: 'none',
      fontSize: '0.9rem',
      position: 'absolute',
      bottom: '10px',
      left: '10px',
      border: 'none',
      cursor: 'pointer',
      padding: '0',
      margin: '0',
    },
    popupOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    popupContent: {
      background: '#ffffff',
      borderRadius: '8px',
      padding: '20px',
      width: '80%',
      maxWidth: '600px',
      position: 'relative',
      overflowY: 'scroll',
      maxHeight: '80%',
    },
    closePopup: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      color: '#007aff',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    popupHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    popupBody: {
      margin: '20px 0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '1rem',
    },
    bookButton: {
      backgroundColor: '#007aff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    imageGallery: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginTop: '20px',
    },
    imageThumbnail: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    reviewSection: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.servicesPage}>
        {services.map((serviceCategory, index) => (
          <div key={index} style={styles.serviceCategory}>
            <h2 style={styles.serviceCategoryH2}>{serviceCategory.category}</h2>
            <div style={styles.serviceCards}>
              {serviceCategory.services.slice(0, 7).map((service, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.serviceCard,
                    border: selectedService === service ? '2px solid #007aff' : 'none',
                  }}
                  onClick={() => handleCardClick(service)}
                >
                  <img src={service.image} alt={service.name} style={styles.image} />
                  <h3 style={styles.serviceName}>{service.name}</h3>
                  <p>{service.description}</p>
                  <button style={styles.readMore}>Read More</button>
                </div>
              ))}
              <div
                style={styles.serviceCard}
                onClick={() => handleCardClick({ name: 'Load More...', details: `${serviceCategory.category.toLowerCase()}` })}
              >
                <img src="loadmore.jpg" alt="Load More" style={styles.image} />
                <h3 style={styles.serviceName}>Load More...</h3>
                <button style={styles.readMore}>
                  Load More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <button onClick={handleClosePopup} style={styles.closePopup}>
              <FaTimes />
            </button>
            <div style={styles.popupHeader}>
              <img src={selectedService.image} alt={selectedService.name} style={{ width: '50px', borderRadius: '5px' }} />
              <h3>{selectedService.name}</h3>
            </div>
            <div style={styles.popupBody}>
              <h4>{selectedService.firm}</h4>
              <p>{selectedService.details}</p>
              <form style={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={appointmentDetails.name}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={appointmentDetails.email}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <input
                  type="date"
                  name="date"
                  value={appointmentDetails.date}
                  onChange={handleInputChange}
                  required
                  style={styles.input}
                />
                <button type="submit" style={styles.bookButton}>Book Appointment</button>
              </form>
              <div style={styles.imageGallery}>
                {selectedService.images.map((image, index) => (
                  <img key={index} src={image} alt={`Gallery ${index}`} style={styles.imageThumbnail} />
                ))}
              </div>
              <div style={styles.reviewSection}>
                <h5>Reviews</h5>
                <p>{selectedService.reviews}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
