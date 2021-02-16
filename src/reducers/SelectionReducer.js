export default (state = null, action) => {
    switch(action.type) {
        case 'selected_person':
            return action.payload;
        default:
            return state;
    }
}