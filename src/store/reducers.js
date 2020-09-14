const initialState = {
    users: []
}

console.log("initial state", initialState)

export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "putData":
            return {...state, users:action.payload}
        default:
            return {...state, users:["ggfg"]}
    }
}