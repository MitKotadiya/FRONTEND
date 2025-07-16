// try catch --->In JavaScript, try...catch is used for error handling — it allows you to write code that may throw an error, and then catch and handle that error gracefully, without breaking the entire program.

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return  a / b;
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Division attempt finished.");
  }
}
divide(10, 0); 
