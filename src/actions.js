import * as actions from './actionTypes';

// if we return object in es6, we have to wrap {} with ()
export const bugAdded = description => ({
    type: actions.ADD_BUG,
    payload: {
        description
    }
});

export const bugResolved = id => ({
    type: actions.RESOLVED_BUG,
    payload: {
        id
    }
})

// export function bugAdded(desciprtion) {
//     return {
//         type: actions.ADD_BUG,
//         payload: {
//             desciprtion: description
//         }
//     }
// }