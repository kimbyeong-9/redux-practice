let initialState = {
    count: 0,

}


function reducer(state = initialState, action) {
    console.log("action은 뭥미?", action)


    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + action.payload.num}
        default:
            return {...state}
    }

    return { ...state };
}


export default reducer;