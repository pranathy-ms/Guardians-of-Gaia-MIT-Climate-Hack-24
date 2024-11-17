import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../../Components/HeroSection';
import Section from '../../Components/Section';
import { pageTitle } from '../../helper';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// Import Mapbox access token from Vite's environment variables
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const heroData = {
  slides: [
    {
      title: 'UrbanGrove',
      subtitle: 'Buildings Building Towards Net Zero: A Data-Driven Approach',
      btnText: 'Learn More',
      btnUrl: '/about',
    },
  ],
};

export default function HomePage() {
  pageTitle('UrbanGrove');

  const [formData, setFormData] = useState({
    address: '',
    fromDate: '',
    toDate: '',
  });
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const addressInputRef = useRef(null);

  useEffect(() => {
    if (addressInputRef.current.children.length === 0) {
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: 'Search for an address',
        mapboxgl: mapboxgl,
        flyTo: false,
      });

      geocoder.addTo(addressInputRef.current);

      // Apply custom styles and adjustments
      const geocoderInput = addressInputRef.current.querySelector('.mapboxgl-ctrl-geocoder--input');
      if (geocoderInput) {
        Object.assign(geocoderInput.style, styles.geocoderInput);
      }

      const geocoderIcon = addressInputRef.current.querySelector('.mapboxgl-ctrl-geocoder--icon-search');
      if (geocoderIcon) {
        geocoderIcon.style.order = '2'; // Move icon after the input field
        geocoderIcon.style.fontSize = '24px'; // Make icon larger
        geocoderIcon.style.marginLeft = '8px'; // Add space between input and icon
      }

      geocoder.on('result', (e) => {
        setFormData({
          ...formData,
          address: e.result.place_name,
        });
      });

      return () => {
        geocoder.clear();
      };
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setResponseData(data);
        setError(null);
      } else {
        setResponseData(null);
        setError(`Error ${response.status}: ${data.error}`);
      }
    } catch (err) {
      setResponseData(null);
      setError('An error occurred while fetching data.');
    }
  };

  const extractHVACAndEmissionsData = (data) => {
    const hvacParams = [
      'hvac_heating_efficiency',
      'hvac_cooling_efficiency',
      'hvac_air_distribution_efficiency',
    ];

    const extractedData = {
      hvac: {},
      emissions: {},
    };

    if (data.consumption && data.consumption.baseline) {
      data.consumption.baseline.forEach((item) => {
        if (hvacParams.includes(item.name)) {
          if (Array.isArray(item.value)) {
            extractedData.hvac[item.name] = item.value.map(
              (entry) => `Temp: ${entry.temperature}°C, Value: ${entry.value}`
            ).join(', ');
          } else {
            extractedData.hvac[item.name] = item.value;
          }
        }
      });
    }

    if (data.costs && data.costs.emission_rates) {
      extractedData.emissions.electricity = {
        value: data.costs.emission_rates.electricity.value,
        units: data.costs.emission_rates.electricity.units,
      };
      extractedData.emissions.fossil_fuel = {
        value: data.costs.emission_rates.fossil_fuel.value,
        units: data.costs.emission_rates.fossil_fuel.units,
      };
    }

    return extractedData;
  };

  const renderResponseData = (data) => {
    if (!data || !data.hvac) {
      return <p>No relevant data found.</p>;
    }

    return (
      <div>
        <h3>HVAC Data:</h3>
        <ul>
          {Object.entries(data.hvac).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>

        <h3>Carbon Emissions:</h3>
        <ul>
          <li>Electricity Emission: {data.emissions.electricity.value} {data.emissions.electricity.units}</li>
          <li>Fossil Fuel Emission: {data.emissions.fossil_fuel.value} {data.emissions.fossil_fuel.units}</li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <HeroSection data={heroData} />
      <Section topSpaceMd="80" topSpaceLg="150">
        <div className="form-container" style={styles.formContainer}>
          <h2 style={styles.formTitle}>Geocoding Data Input</h2>
          <div ref={addressInputRef} style={styles.geocoderContainer}></div>
          <form onSubmit={handleSubmit} style={styles.form}>
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
        <div style={styles.responseContainer}>
          {responseData && (
            <div>
              <h3 style={styles.responseTitle}>Response:</h3>
              {renderResponseData(extractHVACAndEmissionsData(responseData.data))}
            </div>
          )}
          {error && (
            <div style={styles.errorBox}>
              <h3>Error:</h3>
              <p>{error}</p>
            </div>
          )}
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
  geocoderContainer: {
    marginBottom: '15px',
    position: 'relative',
    zIndex: 2, // Ensures the dropdown appears properly
  },
  geocoderInput: {
    borderRadius: '5px',
    border: '1px solid #2a7f3d',
    outline: 'none',
    width: '100%',
    padding: '10px 12px', // Adjust padding for better look
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
  responseContainer: {
    marginTop: '30px',
    textAlign: 'left',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
  },
  responseTitle: {
    color: '#2a7f3d',
    fontFamily: 'Arial, sans-serif',
  },
  responseBox: {
    backgroundColor: '#e6f5e9',
    padding: '10px',
    borderRadius: '5px',
    overflowX: 'auto',
  },
  errorBox: {
    backgroundColor: '#f8d7da',
    padding: '10px',
    borderRadius: '5px',
    color: '#721c24',
  },
};
