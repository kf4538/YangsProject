// import './Home.css'
import { useState } from "react";
import { useEffect } from "react";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/users', {
                  method: "GET",
                  headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
                    'Access-Control-Allow-Credentials': 'true'
                  }
                });
                const data = await response.json(); 
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;