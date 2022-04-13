import React, { useState } from 'react';


function Home() {
    const [user, setUser] = useState([]);

    return (
        <div className='container'>
            <div className="py-4">
                <h1>Home</h1>
                <table className="table border shadow">
                    <thead className="table-dark ">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">e-mail</th>
                        <th scope="col">username</th>
                        <th style={{width: "20%"}}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        users.map ((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.vehicle}</td>
                                <td>{user.country}</td>
                            </tr>
                        ))

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;