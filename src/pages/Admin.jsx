import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import Leftbar from '../components/Leftbar';

function Admin() {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchUsers() {
        try {
            const response = await axios.get('http://localhost:8080/getusers', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data)
            setUserData(response.data);
        } catch (error) {
            setError(error);
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <Topbar />
            <Leftbar />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1>Welcome to the Admin Page</h1>
                    {
                        <table style={{marginTop:"390px"}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Plants</th>
                                {/* Add more table headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.uid}</td>
                                    <td>{user.name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.createdAt}</td>

                                    <td>
                                        {
                                            user.plants.map(plant => (
                                                <p>{plant.plantType}</p>
                                            ))
                                        }
                                    </td>

                                    {/* Add more table data as needed */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Admin;
