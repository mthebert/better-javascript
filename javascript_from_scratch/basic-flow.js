var age = Number(prompt("What is your age?", ""));

// Using If/Else
if(age < 40) {
    console.log("You are still so young!");
}
else if(age == 40) {
    console.log("Hey you are 40!");
}
else {
    console.log("Dont worry, you are young at heart");
}

// Using a while loop
age2 = age;
var string = "";
while (age2 > 0) {
    string += "Happy Birthday \n";
    age2 -= 1;
}
console.log(string);

// using a do-while loop
age3 = age;
string = "";
do {
    string += "Happy Birthday \n";
    age3 -= 1;
} while (age3 > 0)
console.log(string);

// using a for loop
string = ""
for (var theAge = age; theAge > 0; theAge -= 1) {
    string += "Happy Birthday!\n";
}
console.log(string);

// adding a break
string = "";
for (var counter = 1; counter < age; counter += 1)
{
    string += "Happy Birthday!\n";
    if (counter % 7 == 0)
        break;
}
console.log(string);

// using a switch
var animal = "dog";
switch(animal)
{
    case "cat":
        console.log("meow");
        break;
    case "dog":
        console.log("ruff ruff");
        break;
    case "horse":
        console.log("neigh!");
        break;
    default:
        console.log("I dunno...ribbit?");
        break;
}