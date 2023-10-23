# Colorize
_Lab 2 in software quality. Color and theme generator for websites._

✨ Set color to your websites. Generate a random color or one that suits your needs! The color may be used to generate color themes further making your projects pop! ✨

## Features
- generate RGB color: either random, dark or light
- generate theme for chosen color
  - you may choose between a monochromatic theme and an analogous theme (2 other colors to compliment your color will be given in each case)
- get suggestion for either black or white font for your given background color
- check if your font color is WCAG AA and WCAG AAA compliant with your background color

## General information
Language: JavaScript
Dependencies: Node.js
Version: 1.0.0

## Installation
1. Download the repository
2. The repository contains a ***lib folder*** which implements the functionality of the Colorizer module. The lib folder contains the following files:
    - ColorGenerator.js - for generating random, light and dark colors.
    - ColorSchemeGenerator.js - for generating monochromatic and analogous color schemes (2 other colors to compliment your color will be given in each case).
    - FontColorHelper.js - for checking if a font color is WCAG AA and WCAG AAA compliant with a given background color and for suggesting either black or white font color for a given background color.
3. Use the lib folder in your project to use the Colorizer module.
4. Import the Colorizer's classes in your own application according to your needs as follows:
```javascript
import { ColorGenerator } from "<yourpathhere>"
import { ColorSchemeGenerator } from "<yourpathhere>"
import { FontColorHelper } from "<yourpathhere>"
```

_Note that the example_app folder contains an example application that uses the Colorizer module. You may use it as a reference._


## Code example
```javascript

// ColorGenerator
// Use the ColorGenerator class to generate a random color, a light color or a dark color.
const colorGenerator = new ColorGenerator()

// Generate a random color using the colorGenerator instance.
const randomColor = colorGenerator.generateRandomColor()
const lightColor = colorGenerator.generateLightColor()
const darkColor = colorGenerator.generateDarkColor()

// Log the results to the console and use the rgb values for your project. The results will be in the following format: "rgb(0, 0, 0)", string.
console.log(randomColor)
// Example output: "rgb(9, 16, 239)"
console.log(lightColor)
// Example output: "rgb(255, 163, 250)"
console.log(darkColor)
// Example output: "rgb(54, 83, 30)"


// ColorSchemeGenerator
// Use the ColorSchemeGenerator to generate a monochromatic or analogous color scheme for a given color.
const colorSchemeGenerator = new ColorSchemeGenerator()
const colorScheme = colorSchemeGenerator.generateMonochromaticColorScheme(darkColor)
// Example output: ['rgb(232, 235, 229)', 'rgb(0, 6, 0)']
const analogousColorScheme = colorSchemeGenerator.generateAnalogousColorScheme(lightColor)
// Example output: ['rgb(255, 223, 250)', 'rgb(255, 223, 270)']

// or you may enter your own color in RGB format
const myMonochromaticColorScheme = colorSchemeGenerator.generateMonochromaticColorScheme("rgb(200, 100, 0)")
// Output: ['rgb(248, 237, 225)', 'rgb(195, 85, 0)']
const myAnalogousColorScheme = colorSchemeGenerator.generateAnalogousColorScheme("rgb(200, 100, 0)")
// Output: ['rgb(200, 160, 0)', 'rgb(200, 100, 60)']

// Log the results to the console and use the rgb values for your project. The results will be displayed in an array of strings format: ["rgb(0, 0, 0)", "rgb(0, 0, 0)"]. Your color will not be included in the array, only the 2 other colors that were generated to compliment it.

// FontColorHelper
// Use the FontColorHelper to check if a specific font color is WCAG AA and WCAG AAA compliant with a specific background color.
const fontColorHelper = new FontColorHelper()
const fontColor = "rgb(200, 200, 200)" // you may enter or generate your own font color here in RGB format
const aaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAA(randomColor, fontColor)
const aaaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAAA(randomColor, fontColor)
// or you may enter your own font color/ background color in RGB format
const aaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAA("rgb(200, 100, 0)", "rgb(200, 200, 200)")

// Log the results to the console. You will get the results in a boolean format: true or false. Either your font color is compliant with the background color or it is not.
console.log("is my font WCAG AA compliant?", aaCompliant)
// Example output: "is my font WCAG AA compliant?", true 
console.log("is my font WCAG AAA compliant?", aaaCompliant)
// Example output: "is my font WCAG AAA compliant?", false

// Suggest either white or black font color for a given background color.
const fontColor = fontColorGenerator.const fontColor = fontColorGenerator.suggestWhiteOrBlackFont(randomColor)
// or you may enter your own background color in RGB format
const fontColor = fontColorGenerator.suggestWhiteOrBlackFont("rgb(200, 100, 0)")

// Log the results to the console. You will get either a string that represents rgb white or rgb black. 
console.log("use this font color:", fontColor)
// Example output: "use this font color:", "rgb(255, 255, 255)"

```

## Tests
Manual tests were performed using a browser application from the example_app folder. The use cases are documented in the file [testrapport.md](testrapport.md).

## Issues and testing
Manual tests and issues are documented in the file [testrapport.md](testrapport.md).

## License
MIT License - see the LICENSE.md file for details.

## Version number and date of release
v1.0.0 - 19/02/2023

## Planned future development
No future development planned. This is a student project given in a software quality course at Linnaeus University 2023.

## Contributing
You may contribute to this project by opening an issue.

## Authors
Anna Manole - am224wd@student.lnu.se
