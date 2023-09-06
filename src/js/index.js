import { ColorGenerator } from "./ColorGenerator.js"

// Create a new instance of the ColorGenerator class.
const colorGenerator = new ColorGenerator()

// Generate a random color using the colorGenerator instance.
const randomColor = colorGenerator.generateRandomColor()
const brightColor = colorGenerator.generateLightColor()
const darkColor = colorGenerator.generateDarkColor()

// Test the random color by setting it as the background color of the <h1> element.
const heading = document.querySelector("h1")
heading.style.color = darkColor

// Test the random color by setting it as the color of the <p> element.
const paragraph = document.querySelector("p")
paragraph.style.color = randomColor

// Set the random color on a <div> element.
const testDiv = document.querySelector("#testDiv")
testDiv.style.backgroundColor = brightColor
