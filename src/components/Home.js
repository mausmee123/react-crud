import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [users, setUsers] = useState([]);



    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/user")
        setUsers(result.data)
    };


    const deleteUser = async id => {
        await axios.delete(`http://localhost:3000/user/${id}`);
        loadUsers();
    };

    return (
        <div className='container'>
            <div className="py-4">
                <h1>Home</h1>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">gender</th>
                        <th scope="col">vehicle</th>
                        <th scope="col">country</th>
                        <th style={{width: "20%"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>{
                        users.map ((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.vehicle}</td>
                                <td>{user.country}</td>
                                <td >
                                    <Link className=" btn btn-primary" to={`/user/update/${user.id}`}>update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteUser(user.id)}>delete</button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;