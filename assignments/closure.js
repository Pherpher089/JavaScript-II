// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const outSide = "Im out side the functions scope";

function closuerer()
{
  console.log(outSide);
}

closuerer();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let c = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return c += 1;
};

counter(); // 1
counter(); // 2
console.log(`counter: ${c}`);

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  return countMachine = {
    incrament() {
      c++;
      console.log(`incramented: ${c}`);
    },

    decrament(){
      c--;
      console.log(`decramented: ${c}`);
    }
  }
};

counterFactory();
