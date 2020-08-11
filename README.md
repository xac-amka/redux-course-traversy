## Redux crash course by MOSH

## When "NOT" To Use Redux
 - Tight budget
 - Small to medium-size apps
 - Simple UI/data flow
 - Static data

## Pros ---------------------- Cons
  ______________________________________ 
 | Easier Debugging        | Complexity |
 | Easier Testing          | Verbosity  |
 | Undo/Redo               |            |
 | Preserve Page State     |            |
 | Persist State           |            |
  ______________________________________

## Programming Paradigms
 - Functional
 > Invented in 1950s, it takes input and returns output. They don't mutate or change data.
   - More Concise 
   - Easier To Debug
   - Easier To Test
   - More Scalable
   - Languages
     - Clojure
     - Haskell
     - JavaScript

 - Object Oriented 
 - Procedural
 - Event-driven

## Currying
 >Currying is a technique that allows us to take a function that has in arguments and convert it to function that has a single argument. **N => 1**
 ```js
  function add(a, b) {
    return a + b;
  }
  // Curried version
  function add(a) {
    return function (b) {
      return a + b;
    }
  }
  // Curried version with es6
  const add = a => b => a + b; 
  // To use it.
  add(1)(5);
 ```

## Pure Functions
 - No random values
 - No current date/time
 - No global state (DOM, files, db, etc)
 - No mutation of parameters
  > In **redux** special function called **reducers** must be pure. Other functions in app can be impure

 - **BENEFITS**
   - Self-documenting
   - Easily testable
   - Concurrency
   - Cacheable

## Immutability
 - Once created, cannot be changed
 - **const** keyword is not creating immutable object. With **const** keyword we cannot reassign book to different object. In other word **const** prevents reassignment.
 - **BENEFITS**
   - Predictability
   - Faster Change Detection
   - Concurrency
 - cons
   - Performance
   - Memory overhead
    > To prevent this, use _Structural Sharing_ 

 - Enforcing immutability most common libs
   - Immutable by FB, gives immutable data structure
   - Immer created by creator of MobX
   - Mori

## Redux
 - Is a Single source of truth
 - Redux parts
   - ACTION (Event)
   > Plain JS object that represent what just happened
   - STORE
   > Single JS object that includes app state. 
   - REDUCERS (Event Handler)
   > Pure functions, so they don't touch global state, don't mutate argument, don't have side affect

     -We create action object and dispatch it. The store object has a dispatch method that takes an action. It will forward this action to the reducer. So we don't call reducer directly. We just work with store.Store is in charge of calling the reducer. Reducers computes the new state and returns it. Store set the state internally and notified the UI components about update. These UI components will pull out the updated data and refresh themselves.

 - **FOUR** steps to follow when creating redux
   - Design the store
   > We need to decide what we want to keep in the store
   - Define the actions
   > What are the actions that the user can perform in this app
   - Create a reducer
   > This reducers takes an action and return updated action
   - Set up the store
   


  