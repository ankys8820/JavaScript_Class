// {## Logical Operators}

/*
And &&, Or ||, Not !
*/

let password = "qwerty@";

if (password.length > 5 && password.includes("@")) {
  console.log("Password Strength strong");
} else {
  console.log("Change your password");
}

// Not Operator ! true to false And false to true

let status1 = false;
if (!status1) {
  console.log("Your status is = ", status1);
}
/*
Priority wise { 
Not
{
left to right{And, Or}}
}
*/
