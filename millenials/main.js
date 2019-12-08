const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

const sentence = `Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!`

console.log(sentence);

//write a function that accepts the foodArray as an argument and returns a new array containing only the foods that begin with the letter a and the letter t
const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

const ATfoods = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) === "a" || array[i].charAt(0) === "t") {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/* mo code
const myFavoriteFoods = (BUTTZ) => {
    let newArray = []
    for (let index = 0; index < BUTTZ.length; index++) {
        const element = BUTTZ[index];
        console.log(element);
        if(element.startsWith("a") || element.startsWith("t")) {
            newArray.push(element)
        }
    }
    return newArray
}
*/

console.log(ATfoods(foodArray));