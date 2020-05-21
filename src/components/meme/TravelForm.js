import React from "react"

class TravelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "female",
            location: "India",
            dietaryRestrictions: {
                lactosefree: true,
                vegetarian: false,
                kosher: true
            }
        }
    }
    handleChange = (e) => {
        const { name, value, type, checked } = e.target
        type === "checkbox" ? this.setState(prevState => {
            return {
                dietaryRestrictions: {
                    ...prevState.dietaryRestrictions,
                    [name]: checked
                }
            }
        })
            : this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Your form is submitted:", this.state)
    }
    render() {
        return (
            <>
                <h1>Welcome to Travel world</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>FirstName</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Please enter firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>LastName</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Please enter lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        placeholder="Please enter age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label>Gender</label>
                    <input
                        type="radio"
                        name="gender"
                        placeholder="Please enter female"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    />Female
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        placeholder="Please enter male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    />Male
                    <br />
                    <label>Location</label>
                    <select
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location">
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="South koria">South koria</option>
                    </select>
                    <br />
                    <label>Dietary restrictions</label>
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="vegetarian"
                        checked={this.state.dietaryRestrictions.vegetarian}
                    />Vegetarian
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="kosher"
                        checked={this.state.dietaryRestrictions.kosher}
                    />Kosher
                    <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="lactosefree"
                        checked={this.state.dietaryRestrictions.lactosefree}
                    />Lactose free
                    <br />
                    <button>Submit</button>
                </form>
                <h1>Entered information:</h1>
                <h5>Your name:{this.state.firstName}</h5>
                <h5>Your last name:{this.state.lastName}</h5>
                <h5>Your age:{this.state.age}</h5>
                <h5>Your gender:{this.state.gender}</h5>
                <h5>Your location:{this.state.location}</h5>
                <h5>Dietary restrictions:
                    {this.state.dietaryRestrictions.vegetarian && "Vegetarian"}--
                    {this.state.dietaryRestrictions.kosher && "Kosher"}--
                    {this.state.dietaryRestrictions.lactosefree && "Lactos free"}</h5>
            </>
        )
    }
}

export default TravelForm