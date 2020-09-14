const initialState = {
    users: []
}

console.log("initial state", initialState)

export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "one":
            return {...state, users:["lol"]}
        default:
            return {...state, users:["ggfg"]}
    }
    return state
}