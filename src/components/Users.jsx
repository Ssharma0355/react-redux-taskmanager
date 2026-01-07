import React, { useEffect, useState } from 'react'
import axios from "axios"
import StateManagement from './StateManagement';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");
    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const resposne = await axios
                .get("https://jsonplaceholder.typicode.com/users");
                setUsers(resposne.data)
            }
            catch(err){
                if(err.resposne){
                    console.log("Error in response")
                }

            }
            finally{
                setLoading(false)
        }
        }
        fetchUsers();
    
    },[])

   
    const postName = async () => {
        try {
          const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            { name }
          );
    
          // Optimistic UI update
          setUsers([...users, response.data]);
          setName("");
        } catch (error) {
          alert("Failed to add user");
        }
      };

    if(loading){
        <h1>Loadingg...</h1>
    }
  return (
    <div>
        <div>
        <p>Enter user</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="here"
        />
        <button onClick={postName}>Submit name</button>
      </div>
        {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}

      <StateManagement />
    </div>
  )
}

export default Users
