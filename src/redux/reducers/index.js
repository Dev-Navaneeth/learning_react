import { combineReducers } from "redux";
import { employeesReducer} from "./employeeReducers";
const reducers = combineReducers({
  allEmployees: employeesReducer,
});
export default reducers;