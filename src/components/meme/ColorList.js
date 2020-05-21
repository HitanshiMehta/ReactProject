import React from "react"
import styles from "../../Styling/ListStyle.module.css"
import ColorFooter from "./ColorFooter"
import colors from "../../PracticeData/ColorsData"

const colorListStyle = {
    color: "white",
    backgroundColor: "black",
    padding: "30px",
    fontSize: "20px",
    fontFamily: "Arial"
}

function OrderedList() {
    return (
        <ol style={{ color: "blue", backgroundColor: "lightblue" }}>
            <li>Okay Hello</li>
            <li>Okay Hi</li>
            <li>Okay Kem</li>
            <li>Okay Cho? Wow</li>
        </ol>
    )
}

function UnorderedList() {
    return (
        <ul style={colorListStyle}>
            <li>Red</li>
            <li>Green</li>
            <li>Blue Wow</li>
        </ul>
    )
}

function MyInfo() {
    return (
        <>
            <h1>Hitanshi Mehta</h1>
            <p className={styles.nameStyling}>
                Hello, How are you? Kem cho ji! Wow
            </p>
        </>
    )
}

class DisplayAllColor extends React.Component {
    handleButtonClick = () => {
        this.props.onButtonClick(this.props.color)
    }
    render() {
        return (
            <>
                <span key={this.props.color.id} style={{ color: "orange" }}>
                    {this.props.color.color}-{this.props.color.category}
                </span>
                <button onClick={this.handleButtonClick}>click me!</button>
                <br />
            </>
        )
    }

}

class RenderAllColor extends React.Component {
    handleClick = (color) => {
        alert(color.color + "-" + color.category + "-" + color.type)
    }
    render() {
        const filteredColor = colors.filter(color => color.color !== "red")
        const everyColor = filteredColor.every(color => isNaN(color.color))
        console.log(everyColor)
        const colorsData = filteredColor.map(color =>
            <DisplayAllColor
                key={color.id}
                color={color}
                onButtonClick={this.handleClick} />)
        return (
            <>
                {colorsData}
            </>
        )
    }
}



function ColorList() {
    return (
        <>
            <MyInfo />
            <OrderedList />
            <UnorderedList />
            <RenderAllColor />
            <ColorFooter />

        </>
    )
}

export default ColorList;