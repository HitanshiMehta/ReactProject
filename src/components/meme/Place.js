import React from "react"

class Place extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            place: []
        }
    }
    componentDidMount() {
        this.setState({
            loading:true
        })
        fetch("http://localhost:8000/api/place/")
            .then(response => response.json())
            .then(data => this.setState({
                place: data,
                loading: false
            }
                // , () => { console.log(this.state.place) }
            ))
    }
    render() {
        const place = this.state.place.map(place =>
            <li key={place.id}>{place.id}-{place.name}-{place.address}</li>)
        return (
            <ul>
                {this.state.loading ? "Loading" : place}
            </ul>
        )
    }
}

export default Place