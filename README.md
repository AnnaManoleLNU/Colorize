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
2. The repository contains a lib folder which implements the functionality of the Colorizer module. The lib folder contains the following files:
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


## Code example
```javascript
const colorGenerator = new ColorGenerator()

// Generate a random color using the colorGenerator instance.
const randomColor = colorGenerator.generateRandomColor()
const lightColor = colorGenerator.generateLightColor()
const darkColor = colorGenerator.generateDarkColor()

// Generate a theme for a given color.
const colorSchemeGenerator = new ColorSchemeGenerator()
const colorScheme = colorSchemeGenerator.generateMonochromaticColorScheme(darkColor)
const analogousColorScheme = colorSchemeGenerator.generateAnalogousColorScheme(lightColor)

// or you may enter your own color in RGB format
const myMonochromaticColorScheme = colorSchemeGenerator.generateMonochromaticColorScheme("rgb(200, 100, 0)")
const myAnalogousColorScheme = colorSchemeGenerator.generateAnalogousColorScheme("rgb(200, 100, 0)")


// Check if a specific font color is WCAG AA and WCAG AAA compliant with a specific background color.
const fontColorHelper = new FontColorHelper()
const fontColor = fontColorHelper.getFontColorForBackground(randomColor)
const aaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAA(randomColor, fontColor)
const aaaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAAA(randomColor, fontColor)

// or you may enter your own font color/ background color
const aaCompliant = fontColorGenerator.checkIfCompliantWithWCAGAA("#000000", "#ffffff")

// Suggest either white or black font color for a given background color.
const fontColor = fontColorGenerator.const fontColor = fontColorGenerator.suggestWhiteOrBlackFont(randomColor)

// In any of the cases you may log the results to the console and use the rgb values for your project.

```

