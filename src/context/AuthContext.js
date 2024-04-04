import createDataContext from "./createDataContext";
import api from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default: return state;
    }
}

const signup = (dispatch) => {
    return async ({email, password})=>{
        try {
const response = await api.post('/signup', {email, password})
console.log(response.data)
        } catch (err) {
dispatch ({type: 'add_error', message: 'something went wrong with signup'})
        }

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
    {isSignedIn: false, errorMessage:''},
);