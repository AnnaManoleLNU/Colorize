import { ColorGenerator } from "../lib/js/ColorGenerator.js"
import { ColorSchemeGenerator } from "../lib/js/ColorSchemeGenerator.js"

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

// Generate a monochromatic color scheme.
const colorSchemeGenerator = new ColorSchemeGenerator()
const colorScheme = colorSchemeGenerator.generateMonochromaticColorScheme(lightColor)
console.log('the color scheme is', colorScheme)

// Select all the divs to test.
const testDiv1 = document.querySelector("#testDiv1")
const testDiv2 = document.querySelector("#testDiv2")
const testDiv3 = document.querySelector("#testDiv3")
const testDiv4 = document.querySelector("#testDiv4")

// give the first div the color generated with the ColorGenerator
testDiv1.style.backgroundColor = lightColor 

// The other divs get their color from the color scheme, that was generated from the color.
testDiv2.style.backgroundColor = colorScheme[0]
testDiv3.style.backgroundColor = colorScheme[1]
