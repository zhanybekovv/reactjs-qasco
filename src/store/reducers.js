const initialState = {
    users: []
}

console.log("initial state", initialState)

export const rootReducer = (state = initialState, action) =>{
    console.log(action)
    switch (action.type) {
        case "one":
            console.log("dgdfgdfgfgfdgdg")
            return {...state, users:["lol"]}
        default:
            return {...state, users:["ggfg"]}
    }
}