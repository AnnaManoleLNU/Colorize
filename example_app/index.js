import { ColorGenerator } from "../lib/js/ColorGenerator.js"
import { ColorSchemeGenerator } from "../lib/js/ColorSchemeGenerator.js"
import { FontColorHelper } from "../lib/js/FontColorHelper.js"

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
const colorScheme = colorSchemeGenerator.generateMonochromaticColorScheme(darkColor)

// Select all the divs to test.
const testDiv1 = document.querySelector("#testDiv1")
const testDiv2 = document.querySelector("#testDiv2")
const testDiv3 = document.querySelector("#testDiv3")

// give the first div the color generated with the ColorGenerator
testDiv1.style.backgroundColor = darkColor 

// The other divs get their color from the color scheme, that was generated from the color.
testDiv2.style.backgroundColor = colorScheme[0]
testDiv3.style.backgroundColor = colorScheme[1]

// Test the FontColorGenerator class.
const fontColorGenerator = new FontColorHelper()

const paragraphBackground = document.getElementById("paragraphBackground")
paragraphBackground.style.backgroundColor = randomColor

const fontColor = fontColorGenerator.suggestWhiteOrBlackFont(randomColor)
paragraph.style.color = fontColor

// Check if the font color is AA compliant with the background color.
const aaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAA(fontColor, randomColor)

// Check if the font color is AAA compliant with the background color.
const aaaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAAA(fontColor, randomColor)
