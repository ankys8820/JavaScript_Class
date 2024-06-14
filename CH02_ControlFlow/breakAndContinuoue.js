// {## Break and Continuoue}

// Also called Jump Statement

// used to skip some value of loop

for (let i = 1; i <= 10; i++) {
  if (i == 2) {
    continue; // Moves towards the next iteration
  }
  console.log("Value of i = ", i);
}

// Break Statement

// Used to terminate the loop and controll transfer for outside the loop not the programe

for (let j = 1; j <= 10; j++) {
  if (j == 8) {
    console.log("Loop matched with the target");
    break;
  }
  console.log("Value of j = ", j);
}
