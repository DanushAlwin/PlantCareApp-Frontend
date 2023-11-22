import React, { useState } from 'react';
import Layout from '../components/Layout';
import background from './one.jpg';
import axios from 'axios';

function Users() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [plantName, setPlantName] = useState('');
  const apiKey = 'YOUR_PLANT_ID_API_KEY'; // Replace with your Plant.id API key

  // Handle image selection
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Handle plant identification using Plant.id API
  const identifyPlant = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedImage);

      const response = await axios.post('https://api.plant.id/v2/identify', formData, {
        headers: {
          'Api-Key': apiKey,
          'Content-Type': 'multipart/form-data',
        },
      });

      // Extract the identified plant name
      const identifiedPlant = response.data.suggestions[0]?.plant_name || 'Plant not recognized';
      setPlantName(identifiedPlant);
    } catch (error) {
      console.error('Error identifying plant:', error);
    }
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper" style={{ backgroundImage: `url(${background})`, backgroundSize: '1400px' }}>
        <div className="welcome-container">
          <h1>Plant Identification</h1>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {selectedImage && <img src={selectedImage} alt="Selected Plant" style={{ maxWidth: '100%' }} />}
          <button onClick={identifyPlant}>Identify Plant</button>
          {plantName && <p>Identified Plant: {plantName}</p>}
        </div>
      </div>
    </>
  );
}

export default Users;
