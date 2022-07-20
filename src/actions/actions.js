export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const TOGGLE = "TOGGLE"
export const NOTOGGLE = "NOTOGGLE"



export function incrementCount() {

    return ({type: INCREMENT})
}

export function decrementCount() {

    return ({type: DECREMENT})
}

export function resetCount() {

    return ({type: RESET})
}

export function toggle(){
    return ({type: TOGGLE})
}

export function noToggle(){
    return ({type: NOTOGGLE})
}