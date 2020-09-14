const initialState = {
    users: [],
    singleUser: {}
}

export const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "putData":
            return { users:action.payload}
        case "getSingle":
            return{...state, singleUser:action.payload}
        case "createUser":
            return{...state, users: [...state.users, action.payload ]}
        // case "search":
        //     let x = state.users.filter((user) => {
        //         return user.employee_name.includes(action.payload);
        //     });
        //     return{...state, users: x}
        default:
            return {...state}

    }
}