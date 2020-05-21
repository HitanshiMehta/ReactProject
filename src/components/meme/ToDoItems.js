import React from "react"

export default class ToDoItems extends React.Component {
    handleCheckBox = e => {
        this.props.onTaskComplete(this.props.id)
    }
    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "grey",
            fontSize: 12,
            textDecoration: "line-through"
        }
        return (
            <>
                {this.props.value &&
                    <>
                        <input
                            key={this.props.id}
                            type="checkbox"
                            value={this.props.value}
                            onChange={this.handleCheckBox}
                            checked={this.props.status} />

                        <label style={this.props.status ? completedStyle : null}>{this.props.text}</label>
                        <br />
                    </>
                }

            </>
        )
    }

}