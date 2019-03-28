// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum','Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  cb(arr.length);
}

function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  cb(x + y);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x * y);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(let i = 0; i < list.lenght; i++)
  {
    if(list[i] === item)
    {
      cb(true);
      return;
    }
  }
  cb(false);
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const noDupes = array;

  for(let i = 0; i < array.length; i++)
  {
    for(let j = 0; j < array.length; j++)
    {
      if(i !== j)
      {
        if(noDupes[i] === noDupes[j])
        {
          noDupes.splice(j, 1);
        }
      }
    } 
  }
  cb(noDupes);
}
getLength(items, console.log);
last(items, console.log);
sumNums(10, 5, console.log);
multiplyNums(3, 12, console.log);
removeDuplicates(items, console.log);
