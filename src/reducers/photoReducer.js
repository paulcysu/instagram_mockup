const inititalState = [];

export default function (state = inititalState, action) {
    switch (action.type) {
        case "GET_PHOTOS": 
            return action.payload;
        default:
            return state
    }
}