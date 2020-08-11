// import { ADD_BUG, REMOVE_BUG } from './actionTypes';
import * as actions from './actionTypes';

// []
let lastId = 0;

// Initial state
// When we start our application, the store is initially undefined Redux is gonna call our reducer and pass the undefined as the value of the state in that case we want to return the initial state. We don't want to return undefined or null. 
export default function reducer(state = [], action) {
    if(action.type === actions.ADD_BUG) {
        // return updated store with spread operator or immutableJS or immerJS
            return [
            ...state,
            // payload of the action should contain minimum information we need to update our system.
            {
                id: ++lastId, 
                description: action.payload.description,
                resolved: false
            }
        ]
    }
    else if(action.type === actions.REMOVE_BUG) {
        return state.filter(bug => bug.id !== action.payload.id);
    }
    else if(action.type === actions.RESOLVED_BUG) {
        return state.map(bug => 
            bug.id !== action.payload.id ? bug : {
            ...bug,
            resolved: true
        })
    }
    // If you make mistake, if we dispatch an action that doesn't exist we don't our system to blow up. We want to return current state.
    return state;
}

// Reducer is a pure function. In pure function we are not gonna touch DOM elements, we are not gonna work with any global state, we are not gonna make API calls. Because all these operations can change state of our system as a whole. So pure function should be small function in an isolated world. All it needs should be passed as arguments these are the only dependencies of a pure function.   