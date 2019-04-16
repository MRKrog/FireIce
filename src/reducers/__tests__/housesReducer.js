import { housesReducer } from '../housesReducer'

describe('housesReducer', () => {

  it('should return the initial state for housesReducer of an empty array', () => {
    const expected = []
    const result = housesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return state with all the mockHouses when SET_HOUSES', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" },
      { name: "House Hightower of the Hightower" }
    ]
    const mockAction = { type: 'SET_HOUSES', houses: mockHouses };
    const expectedState = mockHouses
    const result = housesReducer([], mockAction)
    expect(result).toEqual(expectedState);
  })

})
