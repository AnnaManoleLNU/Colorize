## UC 1 - The module generates a color.

Preconditions: 
- An html page is created. The page contains a script tag that imports the Colorizer module, namely the ColorGenerator class.
- Vite ("^4.4.9") is installed and configured in the project.
- The application is started in the browser using the command `npm run dev`.
- The application is opened in the browser, at the address `http://localhost:5173`.
- The browser console is opened.


### UC 1.1 - The module generates a random color.

Steps:
1. Preconditions from UC 1 are met.
2. The user calls the `generateRandomColor()` method on the ColorGenerator instance.
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

Result: The module generates a random color. The rgb string is seen in the console and the color changes on the selected html element. UC 1.1 is completed and passes.
Issues: No issues found i v1.0.0.

### UC 1.2 - The module generates a light color.

Steps:
1. Preconditions from UC 1 are met.
2. The user calls the `generateLightColor()` method on the ColorGenerator instance.
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

Result: The module generates a light color in rgb format. The rgb string is seen in the console as well as applyed to the html element. UC 1.2 is completed and passes.
Issues: The issue lies in defining what a light color is. In v1.0.0 a light color is defined to have at least 200 in each of its rgb values.

### UC 1.3 - The module generates a dark color.

Steps:
1. Preconditions from UC 1 are met.
2. The user calls the `generateDarkColor()` method on the ColorGenerator instance.
3. The user assigns the rgb value to an html element.
4. The user logs the result to the console.

Result: The module generates a dark color in rgb format. The rgb string is seen in the console as well as applyed to the html element. UC 1.3 is completed and passes.
Issues: The issue lies in defining what a dark color is. In v1.0.0 a dark color is defined to have at most 50 in each of its rgb values.

## UC 2 - The module generates a color scheme.

### UC 2.1 - The module generates a monochromatic color scheme.

### UC 2.2 - The module generates an analogous color scheme.

## UC 3 - The module helps the user with font colors.

### UC 3.1 - The module establishes if a font color is WCAG AA compliant with a given background color.

### UC 3.2 - The module establishes if a font color is WCAG AAA compliant with a given background color.

### UC 3.3 - The module suggests either a white or a black font color for a given background color.