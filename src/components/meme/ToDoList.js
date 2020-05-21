import React from "react"
import styles from "../../Styling/ListStyle.module.css"
import ToDoItems from "./ToDoItems"
import TodoTask from "../../PracticeData/ToDoData"

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
        this.state = {
            firstName: "",
            lastName: 0,
            toDo: TodoTask
        }
    }
    handleTextChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleTaskComplete = (id) => {
        this.setState(prevState => {
            const updatedTodo = prevState.toDo.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                toDo: updatedTodo
            }
        })
    }
    addedLastName = () => {
        this.setState({
            lastName: 1
        })
    }
    render() {
        const date = new Date()
        const hours = date.getHours()
        let dayTime

        if (hours < 12) {
            dayTime = "Morning!"
        }
        else if (hours > 12 && hours < 17) {
            dayTime = "Afternoon!"
        }
        else {
            dayTime = "Night!"
        }

        const ToDo = this.state.toDo.map(todo =>
            <ToDoItems
                id={todo.id}
                key={todo.id}
                text={todo.task}
                value={todo.value}
                status={todo.completed}
                onTaskComplete={this.handleTaskComplete}
            />)
        return (
            <>
                {/* this both styling is from ListStyle.module.css */}

                <h1 className={styles.headingStyling}>Welcome {this.state.firstName} {this.state.lastName === 1 && this.input.current.value} </h1>
                <form className={styles.nameStyling}>
                    <p>Good {dayTime}</p>
                    {/* This styling is from app.css.
                        as app.css is imported from app.js we don't need to import app.css file here */}
                    <p className="paragraphStyling">Hello, please enter your name</p>
                    {/* FirstName is handled by controlled Component. */}
                    <label className={styles.labelStyling}>First Name</label><input type="text" name="firstName" placeholder="Please enter your first name" onChange={this.handleTextChange}></input><br />
                    {/* LastName is controlled by uncontroleed component(by ref) */}
                    <label className={styles.labelStyling}>Last Name</label><input type="text" name="lastName" placeholder="Please enter your last name" ref={this.input} onChange={this.addedLastName}></input><br />
                    {ToDo}
                </form>
            </>
        )
    }
}