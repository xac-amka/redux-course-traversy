const numbers = [1, 2, 3];

// Adding 
// Add at front
// const added = [4, ...numbers];
// Add at back
// const added = [...numbers, 4];
// Add at certain place
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; // Slice return array all the elements from zero to index, excluding this element

// Removing
const removed = numbers.filter(n => n != 2);

// Updating
const updated = numbers.map(n => n===2 ? 20 : n);

