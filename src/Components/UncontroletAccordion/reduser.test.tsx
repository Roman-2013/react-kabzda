import {reducer, StateType} from './reduser';

test('reducer change true', () => {
    const state: StateType = {
        collapsed: false
    }
    const NewState = reducer(state, {type: 'TOOGLE-COLAPSED'})

    expect(NewState.collapsed).toBe(true)
})


test('reducer change false', () => {
    const state: StateType = {
        collapsed: true
    }
    const NewState = reducer(state, {type: 'TOOGLE-COLAPSED'})

    expect(NewState.collapsed).toBe(false)
})


test('reducer change Error', () => {
    const state: StateType = {
        collapsed: true
    }
    expect(() => {
        reducer(state, {type: 'FAKETYPE'})
    }).toThrowError()


})