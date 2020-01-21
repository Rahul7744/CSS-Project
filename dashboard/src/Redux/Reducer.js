const ADD = "ADD"

const initState = {
    store_data:[],

}
const store_data = (state=initState,action) => {
    switch(action.type){
        case ADD:
            return{
                ...state,
                store_data:[...state.store_data,action.data1]
            }
        default:
            return state


    }

}

export default store_data