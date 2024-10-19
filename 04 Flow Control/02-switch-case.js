// Declare a variable 'month' and assign it the value "march"
const month = "march";

// Use a switch statement to evaluate the 'month' variable
switch (month) {
  // Case 1: If 'month' is "jan", this block will run
  case "jan":
    console.log("January");
    break; // Stops further execution in the switch statement if the case matches

  // Case 2: If 'month' is "feb", this block will run
  case "feb":
    console.log("feb");
    break;

  // Case 3: If 'month' is "march", this block will run (this case matches in this example)
  case "march":
    console.log("march");
    break; // This stops execution here since the case is matched

  // Case 4: If 'month' is "april", this block will run
  case "april":
    console.log("april");
    break;

  // Default case: If none of the above cases match, this block will run
  default:
    console.log("default case match");
    break; // Stops the switch execution (optional in the default case)
}

// Output in this case will be: "march"
// Since 'month' is "march", the switch statement finds a match and logs "march"
