import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default: return state;
    }
}

const signup = (dispatch) => {
    return ({email, password})=>{

    }
}

const signin = (dispatch) => {
    return ({email, password})=>{

    }
}

const signout = (dispatch) => {
    return ({email, password})=>{

    }
}

export const {Provider, Context} = createDataContext(
    authReducer, 
    {signin, signout, signup},
    {isSignedIn: false},
);