import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class App extends Component {

  componentDidMount(){
    this.getPeople()
  }

  getPeople = async () => {
    try {
      const url = "http://localhost:3001/api/v1/houses";
      const response = await fetch(url)
      console.log(response);
      const data = await response.json()
      console.log(data);
      this.props.setPeople(data)
    } catch (error) {
        console.log(error.message);
    }
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  people: state.people
})

export const mapDispatchToProps=(dispatch) => ({
  setPeople: (data) => dispatch(actions.setPeople(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
