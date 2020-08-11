// Without default export we use {} brackets. With default export we don't need to do that.
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;