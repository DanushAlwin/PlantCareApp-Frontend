import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import background from './one.jpg';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { addPlants , deletePlants} from '../redux/userSlice';
import axios from 'axios';


function Dashboard() {
  const user = useSelector(selectUser);
  const [formData, setFormData] = useState({
    plantName: '',
    plantType: '',
    room: '',
    sunlight: 'moderate',
    watering: 'moderate',
  });
  const [plants, setPlants] = useState([]); // Store the entered plant data
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSubmit = async (event) => {
    // console.log(formData);
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    
    const id = Date.now();
    const plant = { ...formData, id };
    
    // Add the plant data to the list
    setPlants([...plants, plant]);
    
    // Dispatch the action (if needed)
    dispatch(addPlants(plant));
    const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Mjc4MjF0dWFkMDU2QHNrY3QuZWR1LmluIiwiaWF0IjoxNjk3MzczNjQ3LCJleHAiOjE2OTc0NjAwNDd9.L_llrn8G8sI1DO7ZRIZ_vcU2tkX8qZcFoNC5g42QM3Y";
    try {
      console.log(token)
      const response = await axios.post('http://localhost:8080/api/plants/post',formData,{
        headers:{
          'Authorization':`Bearer ${token}`
        }
      },
        );
      const newPlant = response.data;
      
      setPlants([...plants, newPlant]);
      setFormData({
        plantName: '',
        plantType: '',
        room: '',
        sunlight: 'moderate',
        watering: 'moderate',
      });

      console.log(response.data.token)
    } catch (error) {
      console.error('Error adding plant:', error);
    }
    
    // Reset the form data
    setFormData({
      plantName: '',
      plantType: '',
      room: '',
      sunlight: 'moderate',
      watering: 'moderate',
    });
    
  };
 
    return (
        <>
            <Layout />
            <div className='main-wrapper'style={{ backgroundImage: `url(${background})`, backgroundSize:`1400px` }}>
                <div className='welcome-container'>
                    <form onSubmit={handleSubmit} className='form'>
                    {/* <form onSubmit={handlesub} className='form'> */}
                    <div>
          <label>Plant Name:</label>
          <input
            type="text"
            name="plantName"
            value={formData.plantName}
            onChange={handleChange}
            // required
          />
        </div>
        <div>
          <label>Plant Type:</label>
          <input
            type="text"
            name="plantType"
            value={formData.plantType}
            onChange={handleChange}
            // required
          />
        </div>
        <div>
          <label>Room:</label>
          <input
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            // required
          />
        </div>
        <div>
          <label>Sunlight:</label>
          <div className='radioList'>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="low"
                checked={formData.sunlight === 'low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="moderate"
                checked={formData.sunlight === 'moderate'}
                onChange={handleChange}
              />
              Moderate
            </label>
            <label>
              <input
                type="radio"
                name="sunlight"
                value="high"
                checked={formData.sunlight === 'high'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
        <div>
          <label>Water Requirement:</label>
          <div className='radioList'>
            <label>
              <input
                type="radio"
                name="water"
                value="low"
                checked={formData.water === 'low'}
                onChange={handleChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                name="water"
                value="moderate"
                checked={formData.water === 'moderate'}
                onChange={handleChange}
              />
              Moderate
            </label>
            <label>
              <input
                type="radio"
                name="water"
                value="high"
                checked={formData.water === 'high'}
                onChange={handleChange}
              />
              High
            </label>
          </div>
        </div>
        <button type="submit" style={{marginRight:"200px"}}>Submit</button>
      
        
                    </form>
                    {/* <div className="table-container">
            <h2>Plant Data Table</h2>
            <table>
              <thead>
                <tr>
                  <th>Plant Name</th>
                  <th>Plant Type</th>
                  <th>Room</th>
                  <th>Sunlight</th>
                  <th>Water Requirement</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {plants.map((plant) => (
                  <tr key={plant.id}>
                    <td>{plant.plantName}</td>
                    <td>{plant.plantType}</td>
                    <td>{plant.room}</td>
                    <td>{plant.sunlight}</td>
                    <td>{plant.water}</td>
                    <td>
                    <button onClick={() => handleDelete(plant.id)}>Delete</button>
              </td>
                  </tr>
                ))}
              </tbody>
          
            </table>
          </div> */}

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Dashboard