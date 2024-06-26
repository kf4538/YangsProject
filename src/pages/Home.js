// import './Home.css'
import { useState } from "react";
import { useEffect } from "react";
import LinkButton from "../components/LinkButton";

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

          <div className="flex flex-col items-center ">
              <h1>Yang's Project</h1>
              <p>Please participate in this study</p>
              <h4>Click to begin!</h4>

              <LinkButton
                  to={'pre-survey'}
                  text={'Begin'}
              />
          </div>
        </div>
    );
}

export default Home;