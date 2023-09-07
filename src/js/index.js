import { ColorGenerator } from "./ColorGenerator.js"
import { ColorSchemeGenerator } from "./ColorSchemeGenerator.js"

// Create a new instance of the ColorGenerator class.
const colorGenerator = new ColorGenerator()

// Generate a random color using the colorGenerator instance.
const randomColor = colorGenerator.generateRandomColor()
const lightColor = colorGenerator.generateLightColor()
const darkColor = colorGenerator.generateDarkColor()

// Test the random color by setting it as the background color of the <h1> element.
const heading = document.querySelector("h1")
heading.style.color = darkColor

// Test the light color by setting it as the color of the <p> element.
const paragraph = document.querySelector("p")
paragraph.style.color = lightColor

// Set the random color on a <div> element.
const testDiv = document.querySelector("#testDiv1")
testDiv.style.backgroundColor = randomColor

// Generate a monochromatic color scheme.
const colorSchemeGenerator = new ColorSchemeGenerator()
const colorScheme = colorSchemeGenerator.generateMonochromaticColorScheme(randomColor)

const testDiv2 = document.querySelector("#testDiv2")
const testDiv3 = document.querySelector("#testDiv3")
const testDiv4 = document.querySelector("#testDiv4")
