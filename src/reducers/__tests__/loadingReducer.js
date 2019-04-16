import { loadingReducer } from '../loadingReducer'

describe('loadingReducer', () => {

  it('should return the initial state for loadingReducer of false', () => {
    const expected = false
    const result = loadingReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return state with true when SET_LOADING is the case and payload is true', () => {
    const mockAction = { type: 'SET_LOADING', loading: true };
    const expectedState = true
    const result = loadingReducer(false, mockAction)
    expect(result).toEqual(expectedState);
  })

  it('should return state with false when SET_LOADING is the case and payload is false', () => {
    const mockAction = { type: 'SET_LOADING', loading: false };
    const expectedState = false
    const result = loadingReducer(true, mockAction)
    expect(result).toEqual(expectedState);
  })

})
