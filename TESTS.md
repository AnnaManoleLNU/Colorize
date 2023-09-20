## UC 1 - The module generates a color.

**Preconditions:** 
- An html page is created. The page contains a script tag that imports the Colorizer module, namely the ColorGenerator class.
- Vite ("^4.4.9") is installed and configured in the project.
- The application is started in the browser using the command `npm run dev`.
- The application is opened in the browser, at the address `http://localhost:5173`.
- The browser console is opened.


### UC 1.1 - The module generates a random color.

**Steps:**
1. Preconditions from UC 1 are met.
2. The user calls the `generateRandomColor()` method on the ColorGenerator instance, in the script (index.js).
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

**Result:** The module generates a random color. The rgb string is seen in the console and the color changes on the selected html element. UC 1.1 is completed and passes.
**Issues:** No issues found i v1.0.0.

### UC 1.2 - The module generates a light color.

**Steps:**
1. Preconditions from UC 1 are met.
2. The user calls the `generateLightColor()` method on the ColorGenerator instance, in the script (index.js).
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

**Result:** The module generates a light color in rgb format. The rgb string is seen in the console as well as applyed to the html element. UC 1.2 is completed and passes.
**Issues:** The issue lies in defining what a light color is. In v1.0.0 a light color is defined to have at least 200 in each of its rgb values.

### UC 1.3 - The module generates a dark color.

**Steps:**
1. Preconditions from UC 1 are met.
2. The user calls the `generateDarkColor()` method on the ColorGenerator instance, in the script (index.js).
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

**Result:** The module generates a dark color in rgb format. The rgb string is seen in the console as well as applyed to the html element. UC 1.3 is completed and passes.
**Issues:** The issue lies in defining what a dark color is. In v1.0.0 a dark color is defined to have at most 50 in each of its rgb values.

## UC 2 - The module generates a color scheme.

**Preconditions:**
The same as in UC 1 except that the ColorSchemeGenerator class is imported as well.

### UC 2.1 - The module generates a monochromatic color scheme.

**Steps:**
1. Preconditions from UC 2 are met.
2. The user calls the `generateMonochromaticColorScheme()` method on the ColorSchemeGenerator instance, in the script (index.js).
3. The user enters a parameter for the method, which is a color in rgb format as a string. The user may use the color generated in UC 1.1, UC 1.2 or UC 1.3 or may enter a color of their own.
4. The color scheme is generated and the user logs the result to the console.
5. The user assigns the rgb values to html elements. The color used to generate is given to a div element and the other 2 colors (from the monochromatic color scheme) are given to 2 other div elements. The divs are displayed in a row.

**Result:** The module generates a monochromatic color scheme. The rgb strings are seen in the console and the colors are applyed to the html elements. The visual assesment concludes that the color scheme is monochromatic. UC 2.1 is completed and passes.
**Issues:** In v1.0.0 the monochromatic color scheme is defined as a color scheme that has 2 colors that are lighter and darker versions of the color used to generate the scheme. 
- The dark color may display similar rgb values to the color used to generate the scheme. This may be confusing to the user.
- The dark color may be black. This may be confusing to the user.
- The light color may display similar rgb values to the color used to generate the scheme. This may be confusing to the user. 
- The light color may be white. This may be confusing to the user.

### UC 2.2 - The module generates an analogous color scheme.

**Steps:**
1. Preconditions from UC 2 are met.
2. The user calls the `generateAnalogousColorScheme()` method on the ColorSchemeGenerator instance, in the script (index.js).
3. The user enters a parameter for the method, which is a color in rgb format as a string. The user may use the color generated in UC 1.1, UC 1.2 or UC 1.3 or may enter a color of their own.
4. The color scheme is generated and the user logs the result to the console.
5. The user assigns the rgb values to html elements. The color used to generate is given to a div element and the other 2 colors (from the analogous color scheme) are given to 2 other div elements. The divs are displayed in a row.
6. The results are visually assesed to see if the colors are analogous.
7. The results are assesed with the help of an online color scheme generator. https://www.crispedge.com/generate-analogous-color/

**Result:** The module generates an analogous color scheme. The rgb strings are seen in the console and the colors are applyed to the html elements. The visual assesment concludes that the color scheme is analogous. UC 2.2 is completed and passes.
**Issues:** 
- The website used to asses the results appears to not be online in later versions of the module. The issue is not present in v1.0.0.
- Set values of 20 are substracted/added to the rgb values of the color used to generate the scheme. This doesn't give much variance.

## UC 3 - The module helps the user with font colors.

**Preconditions:** The same as in UC 1 except that the FontColorHelper class is imported as well.

### UC 3.1 - The module establishes if a font color is WCAG AA compliant with a given background color.

**Steps:**
1. Preconditions from UC 3 are met.
2. The user calls the `isFontColorWcagAACompliant()` method on the FontColorHelper instance, in the script (index.js).
3. The user enters 2 parameters for the method, which are colors in rgb format as strings. The order of the parameters does not matter. The private methods of the class will sort the parameters and assign them to the appropriate variables.
4. The result is logged to the console.

**Result:** The module establishes if a font color is WCAG AA compliant with a given background color. Either true of false is shown. UC 3.1 is completed and passes.
**Issues:** 
- Error handing is not implemented. If the user enters a color that is not in rgb format, the module will not work as expected. 

### UC 3.2 - The module establishes if a font color is WCAG AAA compliant with a given background color.

**Steps:**
1. Preconditions from UC 3 are met.
2. The user calls the `isFontColorWcagAAACompliant()` method on the FontColorHelper instance, in the script (index.js).
3. The user enters 2 parameters for the method, which are colors in rgb format as strings. The order of the parameters does not matter. The private methods of the class will sort the parameters and assign them to the appropriate variables.
4. The result is logged to the console.

**Result:** The module establishes if a font color is WCAG AAA compliant with a given background color. Either true of false is shown. UC 3.2 is completed and passes.
**Issues:**
- Error handing is not implemented. If the user enters a color that is not in rgb format, the module will not work as expected.

### UC 3.3 - The module suggests either a white or a black font color for a given background color.

**Steps:**
1. Preconditions from UC 3 are met.
2. The user calls the `suggestWhiteOrBlackFont()` method on the FontColorHelper instance, in the script (index.js).
3. The user enters a parameter for the method, which is a color in rgb format as a string. The user may use the color generated in UC 1.1, UC 1.2 or UC 1.3 or may enter a color of their own.
4. The result is logged to the console.

**Result:** The module suggests either a white or a black font color for a given background color. Either "rgb(255, 255, 255)" or "rgb(0, 0, 0)" is shown. UC 3.3 is completed and passes.
**Issues:**
- Error handing is not implemented. If the user enters a color that is not in rgb format, the module will not work as expected.
- Limited functionality. The module only suggests white or black font color. It does not suggest other colors that may be WCAG AA or WCAG AAA compliant with the given background color.
- The choices of white and black are not always WCAG AAA compliant with the given background color.
