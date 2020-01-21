import {combineReducers} from "redux";
import store_data from "./Reducer";


const AllReducers = combineReducers({
    input_data:store_data
})

export default AllReducers