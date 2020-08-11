// Redux
// store is immutable object
// store.currentUser = { name: "MOSH" }

// to update it, we use reducer
// Action is just plain js to describe what just happened. For example, user loggid in, logged out etc..
// function reducer(store, action) {
    // return updated store with spread operator or immutableJS or immerJS
    // const updated = { ...store };
// }
// Based on the type of the action the reducer will know what properties of the state to update.

import store from './store';
import { bugAdded, bugResolved } from './actions';
// To change state of the store we have to dispatch an action with this architecture we're essentially sending every action through it the same entry point.
// To avoid memory leak we have to unsub it. If UI component is invisible, we should do this.
// const unsub = store.subscribe(()=> {
//     console.log("Store Change!", store.getState());
// })

store.dispatch(bugAdded("Bug Number one"));

store.dispatch(bugResolved(1));

// unsub();

// store.dispatch({
//     type: 'REMOVE_BUG',
//     payload: {
//         id: 1
//     }
// });

console.log(store.getState());

/**
 * Summary
 * 
 * When we dispatch an action our store is gonna call our reducer.
 * It is gonna give it the current state and that action that we dispatched
 * based on the type of action we're gonna get the new state.
 * 
 * 
*/