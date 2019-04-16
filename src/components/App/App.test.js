import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { shallow } from 'enzyme';

import * as actions from '../../actions/index'

const mockHouses = [
  { name: "House Corbray of Heart's Home" },
  { name: "House Dayne of Starfall" },
  { name: "House Hightower of the Hightower" }
]


describe('App', () => {

  describe('App Component', () => {
    let wrapper;
    let mockSetLoading = jest.fn()
    let mockSetHouses = jest.fn()
    let mockLoading = false;

    beforeEach(() => {
      wrapper = shallow(<App loading={mockLoading}
                             houses={mockHouses}
                             setLoading={mockSetLoading}
                             setHouses={mockSetHouses}
                             />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

  })

  describe('mapStateToProps', () => {

    it('should return an object with the houses array', () => {
      const mockState = {
        houses: mockHouses,
        filter: 'SET_HOUSES'
      }
      const expected = {
        houses: mockHouses
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

    it('should return an object with the loading status', () => {
      const mockState = {
        loading: false,
        filter: 'SET_LOADING'
      }
      const expected = {
        loading: false
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })

  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with an setHouses action when action.setHouses is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.setHouses(mockHouses)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHouses(mockHouses)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with an setLoading action when action.setLoading is called', () => {
      let mockLoading = false;
      const mockDispatch = jest.fn()
      const actionToDispatch = actions.setLoading(mockLoading)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setLoading(mockLoading)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

  })

})
