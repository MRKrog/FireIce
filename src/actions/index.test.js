import * as actions from '../actions'

describe('actions', () => {

  it('should have a type of SET_HOUSES', () => {

    const mockHouses = [
      { region: "The North" },
      { region: "KingsLanding" },
    ]
    const expectedAction = {
      type: 'SET_HOUSES',
      houses: mockHouses,
    }

    const result = actions.setHouses(mockHouses)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_LOADING', () => {

    const mockLoading = true
    const expectedAction = {
      type: 'SET_LOADING',
      loading: true,
    }

    const result = actions.setLoading(mockLoading)
    expect(result).toEqual(expectedAction)
  })

})
