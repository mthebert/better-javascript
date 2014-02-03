// basic objects, arrays and strings
var dog =
{
    name:   "Charlie",
    breed:  "Mix",
    weight: 12,
    color:  "Brown"
};

var dogWeight = dog.weight;
console.log(dogWeight);

dog.disposition = "wonderful";
disp = dog.disposition;
console.log(disp);

var height = dog.height;
console.log(height);
dog.weight = 15;
var dogweight = dog.weight;
console.log(dogweight);

// arrays
var empty = [];
empty[0] = 1;
empty[1] = 2;
console.log(empty);

var primes = [1, 2, 3, 5, 7, 11];
var thirdPrime = primes[2];
console.log(thirdPrime);

var myArray = [1, "hello", false];
var truth = myArray[2]
console.log(truth);
var myArrayLength = myArray.length;
console.log(myArrayLength);

function range(max){
    var retVal = [];
    for (var i = 0; i < max; i++) {
        retVal[i] = i * 2;
    }
    return retVal;
}
console.log(range(5));

// using push and adding a pop
function pushRange(max)
{
    var retVal = [];
    for (var i = 0; i < max; i++)
    {
        retVal.push(i * 2);
    }
    var last = retVal.pop();
    console.log(last)
    return retVal;
}
console.log(pushRange(7));

// using iterations to scroll through an array
var myArray = range(5);
for(var i = 0; i < myArray.length; i++)
{
    console.log(myArray[i]);
}

// strings
var string = "Matt said, \"the quick brown fox jumps over the lazy moon\"\n";
console.log(string);
string1 = "Matt\n";
string2 = "rules";
console.log(string1 + string2);
var mySplitArray = string.split(" ");
console.log(mySplitArray);
var indexOfBrown = string.indexOf("brown");
console.log(indexOfBrown);
var indexOfLazy = string.indexOf("lazy");
var brownLazy = string.slice(indexOfBrown, indexOfLazy)
console.log(brownLazy);

// regex
var offset = string.search(/quick/);
console.log(offset);
// any letters
offset = string.search(/[a-z]*/);
console.log(offset);
// 5 letters together with a word boundary
offset = string.search(/\b[a-z]{5}\b/);
console.log(offset);
// 5 numbers together with a word boundary
string = "my zip is 30044 what is yours?"
offset = string.search(/\b[0-9]{5}\b/);
console.log(offset);
// better zip regex, 5 numbers then optionally a dash and 4 more numbers surrounded by a word boundary
string = "my zip is 30044-1234 what is yours?"
offset = string.search(/\b[0-9]{5}(?:-[0-9]{4})?\b/);
console.log(offset);