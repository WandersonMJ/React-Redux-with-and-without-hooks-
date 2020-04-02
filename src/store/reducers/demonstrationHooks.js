const INITIAL_STATE = {
    data: [
        'Valor 1 ',
        'Valor 2',
        
    ]
}

export default function demonstrationHooks(state = INITIAL_STATE, action){
    switch(action.type){
        case  'ADD_VALUE':
            return { ...state, data: [...state.data, action.title ] }
        default:
            return state;
    }
}