import SM from '../stateManager/SM';
import spinnerReducer from '../spinner/spinnerReducer';

const store =SM.createStore(spinnerReducer);

export default store;