import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { deletePlants, addPlants } from '../redux/userSlice';
import img from "./img.png";
import "./Remainders.css";
import axios from 'axios';

function PlantBox({ plant, onDelete, onAddReminder }) {
  return (
    <div className='plant-box'>
      <img src={img} alt={plant.plantName} />
      <h3>{plant.plantName}</h3>
      <p>Type: {plant.plantType}</p>
      <p>Room: {plant.room}</p>
      <p>Watering Necessity: {plant.watering}</p>
      <p>Sunlight Necessity: {plant.sunlight}</p>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
      <button onClick={() => onAddReminder(plant.id)}>Add Reminder</button>
    </div>
  );
}

function Remainders() {
  const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();

  async function fetchPlants() {
    try {
      const response = await axios.get('http://localhost:8080/api/plants/get', {
        headers: {
          'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Mjc4MjF0dWFkMDU2QHNrY3QuZWR1LmluIiwiaWF0IjoxNjk4NTg5Njk0LCJleHAiOjE2OTg2NzYwOTR9.FkJtclN_cpl7rMaeos9tCMjxb-2SLLJ25K4aRLNWvF8',
          'Content-Type': 'application/json',
        },
      });
      setPlants(response.data); // Assuming your API returns an array of plant data
      // console.log(plants)
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/plants/delete?id=${id}`, {
        headers: {
          'Authorization':
            `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Mjc4MjF0dWFkMDU2QHNrY3QuZWR1LmluIiwiaWF0IjoxNjk4NTkwMzk5LCJleHAiOjE2OTg2NzY3OTl9.EiTTX9eXd-Je531VTLRgdP24ZA3TTxEds7CqG6_1s_I`,
          'Content-Type': 'application/json',
        },
      });
     // fetchPlants();
      dispatch(deletePlants({ id }));
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  const handleAddReminder = async (id) => {
    // You can implement the logic to add reminders here
    // You may want to open a modal or navigate to a new page for reminder creation
    console.log(`Adding a reminder for plant with ID ${id}`);
  };

  return (
    <>
      <Layout />
      <div className='main-wrapper-plant'>
        <div className='welcome-container-plant' style={{ zIndex: -1 }}>
         
          <div className="plant-box-container">
            {plants.map((plant, index) => (
              <PlantBox
                key={plant.id}
                plant={plant}
                onDelete={handleDelete}
                onAddReminder={handleAddReminder}
              />
            ))}
          </div>
        </div>
      </div>
      <footer />
    </>
  );
}

export default Remainders;
