import React, {Component} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


class Showuser extends Component {

    state  = {
        users: []
    };

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/cuser")
        this.setState({ users : result.data })
    };

    onDelete = async (id) => {
        await axios.delete(`http://localhost:3000/cuser/${id}`);
        this.loadUsers();
    };

    // handleOnUpdate = async (id) => {
    //     this.props.navigate(`/updateUser/${id}`)
    // }

    render() {
        //console.log("props",this.props)
        return (
            <div className="container">
                <table className="table border">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>gender</th>
                        <th>vehicle</th>
                        <th>country</th>
                        <th>btn</th>
                    </tr>
                    </thead>
                    <tbody>{
                        this.state.users.map((user,index) => (
                            <tr key={index}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.vehicle}</td>
                                <td>{user.country}</td>
                                <td>
                                    <Link className=" btn  btn-primary mx-2" to={`/add/${user.id}`}>update</Link>
                                    <button className="btn btn-primary" onClick={() => this.onDelete(user.id)}>delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );

    }
}

export default Showuser;