// Write your code in this file!
//scuberGreetingForFeet() gives customers a free sample if the ride is less than or equal to 400 feet, charges 30 dollars for a distance over 2000 feet, does not allow rides over 2500 feet

//ternaryCheckCity() returns "Ok, sounds good." when the city is NYC, should return "No go." if the destination city is not NYC, 

//switchOnCharmFromTip() should return "Thank you so much." if the tip is generous, should return "Thank you." if the tip is not as generous, should return "Bye." if anything else.

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet > 2500) {
    return 'I will gladly take your thirty bucks.';
    } else {
    return "No can do.";
  }
}


