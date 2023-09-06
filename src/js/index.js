import { ColourGenerator } from "./ColourGenerator.js"

// Create a new instance of the ColourGenerator class.
const colourGenerator = new ColourGenerator()

// Generate a random colour using the colourGenerator instance.
const randomColour = colourGenerator.generateRandomColour()


// Test the random colour by setting it as the colour of the <p> element.
console.log(randomColour)
console.log('hello from the index.js file')
const paragraph = document.querySelector("p")
paragraph.style.color = randomColour

const testDiv = document.querySelector("#testDiv")
console.log(testDiv)
testDiv.style.backgroundColor = randomColour