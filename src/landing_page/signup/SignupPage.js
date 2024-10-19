import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon from react-icons

function SignupPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState('');
  const [signupFormData, setSignupFormData] = useState({
    name: '',
    firmName: '',
    contact: '',
    email: '',
    address: '',
    idProof: '',
    serviceType: '',
    serviceSpecification: '',
    photo: null, // Changed to null for image file
    firmImages: null, // Changed to null for image files
    userId: '',
    password: '',
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleLoginClick = () => setShowLoginPopup(true);
  const handleSignupClick = () => setShowSignupPopup(true);
  const handleClosePopup = () => {
    setShowLoginPopup(false);
    setShowSignupPopup(false);
    setShowSignupForm('');
    setShowSuccessMessage(false);
  };

  const handleSignupFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setSignupFormData({ ...signupFormData, [name]: type === 'file' ? files : value });
  };

  const validateSignupForm = () => {
    const newErrors = {};
    if (!signupFormData.name) newErrors.name = 'Name is required';
    if (!signupFormData.contact) newErrors.contact = 'Contact is required';
    if (!signupFormData.email) newErrors.email = 'Email is required';
    if (!signupFormData.password) newErrors.password = 'Password is required';
    setSignupErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      console.log('Signup form submitted:', signupFormData);
      setShowSuccessMessage(true);
      setSignupFormData({
        name: '',
        firmName: '',
        contact: '',
        email: '',
        address: '',
        idProof: '',
        serviceType: '',
        serviceSpecification: '',
        photo: null,
        firmImages: null,
        userId: '',
        password: '',
      });
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '100vh', padding: '50px 0' }}>
        <div className='row w-100'>
          <div className='col-lg-6 col-md-8 col-sm-12 mx-auto'>
            <div style={styles.formContainer}>
              <h3 className='text-center mb-4'>Welcome to Urban Assist!</h3>
              <p className='text-center mb-4'>You are one step away from your service</p>
              <div className='d-flex justify-content-center'>
                <button onClick={handleLoginClick} className='btn btn-primary mx-2'>Login</button>
                <button onClick={handleSignupClick} className='btn btn-secondary mx-2'>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showLoginPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h4>Login</h4>
            <form>
              <div className='mb-3'>
                <label htmlFor='loginUserId' className='form-label'>User ID</label>
                <input type='text' className='form-control' id='loginUserId' placeholder='Enter your User ID' />
              </div>
              <div className='mb-3'>
                <label htmlFor='loginPassword' className='form-label'>Password</label>
                <input type='password' className='form-control' id='loginPassword' placeholder='Enter your Password' />
              </div>
              <button type='submit' className='btn btn-primary'>Login</button>
            </form>
            <button onClick={handleClosePopup} style={styles.closeButton}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {showSignupPopup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h4>Sign Up As</h4>
            <button onClick={() => setShowSignupForm('serviceProvider')} className='btn btn-primary mx-2'>Service Provider</button>
            <button onClick={() => setShowSignupForm('user')} className='btn btn-secondary mx-2'>User</button>
            <button onClick={handleClosePopup} style={styles.closeButton}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {showSignupForm && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h4>Sign Up as {showSignupForm === 'serviceProvider' ? 'Service Provider' : 'User'}</h4>
            <form onSubmit={handleSignupSubmit} style={styles.signupForm}>
              {showSignupForm === 'serviceProvider' ? (
                <>
                  {/* Service Provider Form Fields */}
                  <div className='mb-4'>
                    <label htmlFor='name' className='form-label fs-5'>Name</label>
                    <input name='name' id='name' placeholder='Enter your name' type='text' className={`form-control ${signupErrors.name ? 'is-invalid' : ''}`} value={signupFormData.name} onChange={handleSignupFormChange} />
                    {signupErrors.name && <div className='invalid-feedback'>{signupErrors.name}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='firmName' className='form-label fs-5'>Firm Name</label>
                    <input name='firmName' id='firmName' placeholder='Enter your firm name' type='text' className={`form-control ${signupErrors.firmName ? 'is-invalid' : ''}`} value={signupFormData.firmName} onChange={handleSignupFormChange} />
                    {signupErrors.firmName && <div className='invalid-feedback'>{signupErrors.firmName}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='contact' className='form-label fs-5'>Contact No</label>
                    <input name='contact' id='contact' placeholder='Enter your contact number' type='number' className={`form-control ${signupErrors.contact ? 'is-invalid' : ''}`} value={signupFormData.contact} onChange={handleSignupFormChange} />
                    {signupErrors.contact && <div className='invalid-feedback'>{signupErrors.contact}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='email' className='form-label fs-5'>Email</label>
                    <input name='email' id='email' placeholder='Enter your email' type='email' className={`form-control ${signupErrors.email ? 'is-invalid' : ''}`} value={signupFormData.email} onChange={handleSignupFormChange} />
                    {signupErrors.email && <div className='invalid-feedback'>{signupErrors.email}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='photo' className='form-label fs-5'>Service Provider Image</label>
                    <input name='photo' id='photo' type='file' className={`form-control ${signupErrors.photo ? 'is-invalid' : ''}`} onChange={handleSignupFormChange} />
                    {signupErrors.photo && <div className='invalid-feedback'>{signupErrors.photo}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='idProof' className='form-label fs-5'>ID Proof</label>
                    <input name='idProof' id='idProof' placeholder='Enter your ID proof' type='text' className={`form-control ${signupErrors.idProof ? 'is-invalid' : ''}`} value={signupFormData.idProof} onChange={handleSignupFormChange} />
                    {signupErrors.idProof && <div className='invalid-feedback'>{signupErrors.idProof}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='serviceType' className='form-label fs-5'>Service Type</label>
                    <input name='serviceType' id='serviceType' placeholder='Enter your service type' type='text' className={`form-control ${signupErrors.serviceType ? 'is-invalid' : ''}`} value={signupFormData.serviceType} onChange={handleSignupFormChange} />
                    {signupErrors.serviceType && <div className='invalid-feedback'>{signupErrors.serviceType}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='serviceSpecification' className='form-label fs-5'>Service Specification</label>
                    <input name='serviceSpecification' id='serviceSpecification' placeholder='Enter your service specification' type='text' className={`form-control ${signupErrors.serviceSpecification ? 'is-invalid' : ''}`} value={signupFormData.serviceSpecification} onChange={handleSignupFormChange} />
                    {signupErrors.serviceSpecification && <div className='invalid-feedback'>{signupErrors.serviceSpecification}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='firmImages' className='form-label fs-5'>Firm Images</label>
                    <input name='firmImages' id='firmImages' type='file' className={`form-control ${signupErrors.firmImages ? 'is-invalid' : ''}`} onChange={handleSignupFormChange} multiple />
                    {signupErrors.firmImages && <div className='invalid-feedback'>{signupErrors.firmImages}</div>}
                  </div>
                </>
              ) : (
                <>
                  {/* User Form Fields */}
                  <div className='mb-4'>
                    <label htmlFor='name' className='form-label fs-5'>Name</label>
                    <input name='name' id='name' placeholder='Enter your name' type='text' className={`form-control ${signupErrors.name ? 'is-invalid' : ''}`} value={signupFormData.name} onChange={handleSignupFormChange} />
                    {signupErrors.name && <div className='invalid-feedback'>{signupErrors.name}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='contact' className='form-label fs-5'>Contact No</label>
                    <input name='contact' id='contact' placeholder='Enter your contact number' type='number' className={`form-control ${signupErrors.contact ? 'is-invalid' : ''}`} value={signupFormData.contact} onChange={handleSignupFormChange} />
                    {signupErrors.contact && <div className='invalid-feedback'>{signupErrors.contact}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='email' className='form-label fs-5'>Email</label>
                    <input name='email' id='email' placeholder='Enter your email' type='email' className={`form-control ${signupErrors.email ? 'is-invalid' : ''}`} value={signupFormData.email} onChange={handleSignupFormChange} />
                    {signupErrors.email && <div className='invalid-feedback'>{signupErrors.email}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='address' className='form-label fs-5'>Address</label>
                    <input name='address' id='address' placeholder='Enter your address' type='text' className={`form-control ${signupErrors.address ? 'is-invalid' : ''}`} value={signupFormData.address} onChange={handleSignupFormChange} />
                    {signupErrors.address && <div className='invalid-feedback'>{signupErrors.address}</div>}
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='photo' className='form-label fs-5'>Profile Photo</label>
                    <input name='photo' id='photo' type='file' className={`form-control ${signupErrors.photo ? 'is-invalid' : ''}`} onChange={handleSignupFormChange} />
                    {signupErrors.photo && <div className='invalid-feedback'>{signupErrors.photo}</div>}
                  </div>
                </>
              )}
              <div className='mb-4'>
                <label htmlFor='userId' className='form-label fs-5'>User ID</label>
                <input name='userId' id='userId' placeholder='Enter your user ID' type='text' className={`form-control ${signupErrors.userId ? 'is-invalid' : ''}`} value={signupFormData.userId} onChange={handleSignupFormChange} />
                {signupErrors.userId && <div className='invalid-feedback'>{signupErrors.userId}</div>}
              </div>
              <div className='mb-4'>
                <label htmlFor='password' className='form-label fs-5'>Password</label>
                <input name='password' id='password' placeholder='Enter your password' type='password' className={`form-control ${signupErrors.password ? 'is-invalid' : ''}`} value={signupFormData.password} onChange={handleSignupFormChange} />
                {signupErrors.password && <div className='invalid-feedback'>{signupErrors.password}</div>}
              </div>
              <button type='submit' className='btn btn-primary'>Sign Up</button>
              {showSuccessMessage && <div className='alert alert-success mt-3'>Signup successful!</div>}
            </form>
            <button onClick={handleClosePopup} style={styles.closeButton}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '30px',
  },
  popup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    overflowY: 'auto',
  },
  popupContent: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '10px',
    position: 'relative',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflowY: 'auto',
    marginTop: '80px',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '1.5rem',
  },
  signupForm: {
    marginTop: '20px',
  },
};

export default SignupPage;
