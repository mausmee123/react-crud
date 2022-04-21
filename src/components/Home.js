import React, {Component} from 'react';
import axios from "axios";
import { useNavigate , useParams  } from "react-router-dom";


function adduser(Component) {
    return props => <Component {...props} params={useParams()} navigate={useNavigate()} />
}

class Home extends Component {

    state = {
        user: {
            vehicle: []
        },
        id: this.props.params.id,
    };


    onChangeInput = (e) => {
        const {name,value,checked} = e.target;
        if (name === "vehicle"){

            if(checked){
                this.state.user.vehicle.push(value)
                this.setState(this.state.user);
            }else{
                this.state.user.vehicle.splice(value, 1);
                this.setState(this.state.user);
            }

        } else {
            this.setState({user: {...this.state.user, [e.target.name]: e.target.value}});
        }
    };

    componentDidMount() {
        this.loadUser();
    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.id) {
            await axios.put(`http://localhost:3000/cuser/${this.state.id}`, this.state.user);
        } else {
            await axios.post("http://localhost:3000/cuser", this.state.user);
        }
        this.props.navigate("/Showuser");
    };


    loadUser = async () => {
        const {data} = await axios.get(`http://localhost:3000/cuser/${this.state.id}`);
        this.setState({ user: { ...this.state.user, ...data } });
    };

    render() {

        const { name ="", email="", phone="" , country="" , gender="" , vehicle=""} = this.state.user;

        return (
            <div className="container">
                <form onSubmit={e => this.onSubmit(e)}>
                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="enter name"
                            value={name}
                            onChange={e => this.onChangeInput(e)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter email"
                            name="email"
                            value={email}
                            onChange={e => this.onChangeInput(e)}
                        />
                    </div>

                    <div className="form-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter phone"
                            name="phone"
                            value={phone}
                            onChange={e => this.onChangeInput(e)}
                        />
                    </div>

                    <div className="form-group mb-2 d-flex">
                        <label><strong>Gender:</strong></label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"male"} checked={gender === "male" ? true : false} name="gender" onChange={e => this.onChangeInput(e)} />
                            <label className="form-check-label">male</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" value={"female"} checked={gender === "female" ? true : false} name="gender" onChange={e => this.onChangeInput(e)} />
                            <label className="form-check-label">female</label>
                        </div>
                    </div>

                    <div className="form-group mb-2 d-flex">
                        <label><strong>Vehicle:</strong></label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={"car"} checked={vehicle.includes("car")} name="vehicle" onChange={e => this.onChangeInput(e)} />
                            <label className="form-check-label">car</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={"bike"} checked={vehicle.includes("bike")} name="vehicle" onChange={e => this.onChangeInput(e)} />
                            <label className="form-check-label">bike</label>
                        </div>
                    </div>

                    <div className="form-group my-2 d-flex">
                        <label><strong>Country:</strong></label>
                        <select name="country" value={country} onChange={e => this.onChangeInput(e)}>
                            <option value={""} selected="selected"/>
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
}

export default adduser(Home);