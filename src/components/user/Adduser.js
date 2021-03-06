import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


function Adduser() {

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        gender:"",
        vehicle:[],
        country:""

    });

    const {name, email, phone,vehicle, country} = user
    const OnchangeInput = e => {
        const {name,value,checked} = e.target;
        if (name === "vehicle"){
            if (checked) {
                user.vehicle.push(value)
                setUser(user);
            } else {
                let index = user.vehicle.indexOf(value)
                user.vehicle.splice(index,1);
                setUser(user);
            }
        // const isChecked = e.target.checked;
        // if(isChecked){
        //     setUser({...user, [e.target.name]:e.target.value })
        // } else {
        //
        // }
        } else {

        setUser({...user, [e.target.name]:e.target.value })
        }
    };



    // const [allcheck, setIsChecked] = useState([]);
    //
    // const handleOnChange = e => {
    //     setIsChecked({...allcheck, [e.target.name]:e.target.checked })
    // };


    const onSubmit = async e => {
        e.preventDefault();

        // const checkdata = new checkdata();
        // checkdata.append('car', allcheck.car ? '1':'0');
        // checkdata.append('bike', allcheck.bike ? '1':'0');

        await axios.post("http://localhost:3000/user",user);
        navigate("/");
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
                        <input className="form-check-input" type="radio" value={"male"} name="gender" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value={"female"} name="gender" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            female
                        </label>
                    </div>
                </div>

                <div className="form-group my-2 d-flex">
                    <label><strong>Vehicle:</strong></label>
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" value={"car"} name="vehicle" onChange={e => OnchangeInput(e)}/>
                        <label className="form-check-label">
                            car
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={"bike"} name="vehicle" onChange={e => OnchangeInput(e)}/>
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

                <button className="btn btn-primary btn-block">Add User</button>

            </form>
        </div>
    );
}

export default Adduser;