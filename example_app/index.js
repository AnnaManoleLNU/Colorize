import { ColorGenerator } from "../lib/js/ColorGenerator.js"
import { ColorSchemeGenerator } from "../lib/js/ColorSchemeGenerator.js"
import { FontColorGenerator } from "../lib/js/FontColorGenerator.js"

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
const colorScheme = colorSchemeGenerator.generateAnalogousColorScheme(darkColor)

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
const fontColorGenerator = new FontColorGenerator()
const luminanceDark = fontColorGenerator.calculateLuminance(darkColor)
console.log("the luminance of the dark color is", luminanceDark)

const luminanceLight = fontColorGenerator.calculateLuminance(lightColor)
console.log("the luminance of the light color is", luminanceLight)

const contrastRatio = fontColorGenerator.calculateContrastRatio(darkColor, lightColor)
console.log("the contrast ratio is", contrastRatio)

const paragraphBackground = document.getElementById("paragraphBackground")
paragraphBackground.style.backgroundColor = darkColor

const fontColor = fontColorGenerator.generateFontColor(lightColor)
console.log("the font color is", fontColor)
// apply it to the <p> element
// paragraph.style.color = fontColor