import React, { Component } from 'react';
import ShoppingApp from "./components/ShoppingCart/ShoppingApp.jsx"
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Redirect, Prompt } from 'react-router-dom';
import TravelForm from './components/meme/TravelForm';
import MemeGenerator from './components/meme/MemeGenerator'
import ColorList from './components/meme/ColorList';
import ToDoList from './components/meme/ToDoList'
import HelloWorld from './components/meme/HelloWorld';
import Login from './components/meme/Login';
import Place from './components/meme/Place';
import './App.css';


class App extends Component {
  state = {
    loggedin: false
  }
  handleLogin = () => {
    this.setState(prevState => {
      return {
        loggedin: !prevState.loggedin
      }
    })
  }
  render() {
    return (
      <>
        <Router>
          <center>
            <button onClick={this.handleLogin}>Log{this.state.loggedin ? "out" : "in"}</button>
          </center>
          <Nav />
          <Route path="/Meme" component={MemeGenerator} />
          <Route path="/Shop" component={ShoppingApp} />
          <Route path="/Todo" component={ToDoList} />
          <Route path="/Travel" component={TravelForm} />
          <Route path="/Color" component={ColorList} />
          <Route path="/HelloWorld" component={HelloWorld} />
          <Route path="/Place" component={Place} />
          <Route path="/Login" render={() => (
            this.state.loggedin ? (<Login />) : (<Redirect to="/Shop" />)
          )} />
          <Prompt
            when={!this.state.loggedin}
            message={(location) => {
              return location.pathname.startsWith('/Login') ? "Please Login" : true
            }}
          />
        </Router>
      </>
    );
  }

}

export default App;
