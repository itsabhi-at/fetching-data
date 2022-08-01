const loggedReducer = (state = false, action) => {
    switch (action.type) {

        case 'LOGGEDIN':
            return state = !state
        default:
            return state
    }
}
export default loggedReducer;