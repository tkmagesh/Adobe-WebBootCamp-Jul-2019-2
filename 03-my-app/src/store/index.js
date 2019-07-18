//import SM from '../stateManager/SM';
import { createStore, combineReducers } from 'redux';
import spinnerReducer from '../spinner/spinnerReducer';
import { calculatorReducer} from '../calculator';

let rootReducer = combineReducers({
	spinnerState : spinnerReducer,
	calculatorState : calculatorReducer
});

const store = createStore(rootReducer);

export default store;