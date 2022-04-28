import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Edituser() {

    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        gender:"",
        vehicle:"",
        country:""
    });

    const {name, email, phone, gender, vehicle, country} = user
    const OnchangeInput = e => {
        setUser({...user, [e.target.name]:e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/user/${id}`,user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3000/user/${id}`)
        setUser(result.data)
    };

    return (
        <div className="container">
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => OnchangeInput(e)}
                    />
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Gender:</strong></label>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="radio" value={"male"} checked={gender === "male" ? true:false} name="gender" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={"female"} checked={gender === "female" ? true:false} name="gender" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            female
                        </label>
                    </div>
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Vehicle:</strong></label>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" value={"car"} checked={vehicle.includes("car")} name="vehicle" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            car
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={"bike"}  checked={vehicle.includes("bike")} name="vehicle" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            bike
                        </label>
                    </div>

                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Country:</strong></label>
                    <select name="country" value={country} onChange={e => OnchangeInput(e)}>
                        <option value={""} selected="selected"></option>
                        <option value={"pakistan"}>pakistan</option>
                        <option value={"africa"}>africa</option>
                        <option value={"china"}>china</option>
                        <option value={"other"}>other</option>
                    </select>
                </div>

                <button className="btn btn-primary btn-block">Update User</button>

            </form>
        </div>
    );
}

export default Edituser;

