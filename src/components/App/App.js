import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import CardContainer from '../CardContainer/CardContainer';
import Loading from '../Loading/Loading';

export class App extends Component {

  componentDidMount(){
    this.props.setLoading(true)
    this.getPeople()
  }

  getPeople = async () => {
    try {
      const url = "http://localhost:3001/api/v1/houses";
      const response = await fetch(url)
      if(!response.ok) { throw new Error('Bad Fetch')}
      const data = await response.json()
      this.props.setHouses(data)
      this.props.setLoading(false)
    } catch (error) {
        console.log(error.message);
    }
  }


  render() {
    const { houses, loading } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        {
          !loading ?
          <CardContainer houses={houses}/> :
          <Loading />
        }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  loading: state.loading
})

export const mapDispatchToProps=(dispatch) => ({
  setHouses: (data) => dispatch(actions.setHouses(data)),
  setLoading: (data) => dispatch(actions.setLoading(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
