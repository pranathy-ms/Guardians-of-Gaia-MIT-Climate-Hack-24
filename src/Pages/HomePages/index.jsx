import React, { useState } from 'react';
import HeroSection from '../../Components/HeroSection';
import Section from '../../Components/Section';
import { pageTitle } from '../../helper';

const heroData = {
  slides: [
    {
      title: 'B2B Energy Optimization Platform',
      subtitle: 'Energy Maximizer for Commercial Real Estate',
      btnText: 'Learn More',
      btnUrl: '/about',
    },
  ],
};

export default function Nature() {
  pageTitle('UrbanGrove');

  // Form state
  const [formData, setFormData] = useState({
    address: '',
    fromDate: '',
    toDate: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <HeroSection data={heroData} />
      <Section topSpaceMd="80" topSpaceLg="150">
        <div className="form-container" style={styles.formContainer}>
          <h2 style={styles.formTitle}>Geocoding Data Input</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div className="form-group" style={styles.formGroup}>
              <label htmlFor="address" style={styles.label}>Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
                style={styles.input}
              />
            </div>
            <div className="form-group" style={styles.formGroup}>
              <label htmlFor="fromDate" style={styles.label}>From Date:</label>
              <input
                type="date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div className="form-group" style={styles.formGroup}>
              <label htmlFor="toDate" style={styles.label}>To Date:</label>
              <input
                type="date"
                id="toDate"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <button type="submit" className="submit-btn" style={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}

const styles = {
  formContainer: {
    backgroundColor: '#e6f5e9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 128, 0, 0.2)',
    maxWidth: '600px',
    margin: 'auto',
    marginTop: '30px',
    textAlign: 'center',
  },
  formTitle: {
    color: '#2a7f3d',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#2a7f3d',
  },
  input: {
    padding: '10px',
    border: '1px solid #2a7f3d',
    borderRadius: '5px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#56b870',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
  },
};
