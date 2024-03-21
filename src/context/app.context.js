"use client"
import { createContext, useReducer } from "react";


const AppReducer = (state, action) => {
    switch (action.type) {
        case "set_step":
            console.log(action.payload)
            return { ...state, step: action.payload }
        case "set_form_one":
            console.log(action.payload, "form one")
            return { ...state, formOne: action.payload }
        case "set_form_two":
            console.log(action.payload, "form two")
            return { ...state, formTwo: action.payload }
        case "set_yearly":
            console.log(action.payload, "yearly")
            return { ...state, formTwo: {...state?.formTwo, yearly:action?.payload?.yearly}}
        case "set_form_three":
            console.log(action.payload, "form three")
            return { ...state, formThree: action.payload }
        default:
            return state
    }

}
const the_state = {
    step: "/",
    formOne: {
        name: "",
        phone: "",
        email: ""
    },
    formTwo: {
        planName: "",
        price: "",
        selected: false,
        yearly: false
    },
    formThree: []
}

export const AppContext = createContext(null)
export const AppProvider = ({ children }) => {
    const [appState, dispatch] = useReducer(AppReducer, the_state)

    const changeStep = (step) => {
        console.log("got here")
        dispatch({
            type: "set_step",
            payload: step
        })

    }


    const changeFormOne = (payload) => {
        dispatch({
            type: "set_form_one",
            payload
        })
    }

    const changeFormTwo = (payload) => {
        dispatch({
            type: "set_form_two",
            payload
        })
    }

    const setYearly = (payload) => {
        dispatch({
            type: "set_yearly",
            payload: { yearly: payload }
        })
    }

    const changeFormThree = (payload) => {
        dispatch({
            type: "set_form_three",
            payload
        })
    }
    return (
        <AppContext.Provider value={{ appState, changeStep, changeFormOne, changeFormTwo, changeFormThree, setYearly }}>
            {children}
        </AppContext.Provider>
    )

}