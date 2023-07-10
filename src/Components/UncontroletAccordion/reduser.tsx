type ActionType = {
    type: string
}
export type StateType={
    collapsed:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type){
        case 'TOOGLE-COLAPSED':
            const stateCopy={...state,collapsed:!state.collapsed}

            return stateCopy
        default:
           throw new Error('Bad action')
    }
}
