/**
 * The ColorSchemeGenerator class generates a color scheme from a given color.
 */
export class ColorSchemeGenerator {
  // The color scheme is an array of 3 colors.
  #colorScheme;

  // Do I want the color scheme generator to generate monochromatic, analogous, tertiary from same color or do I want it to be from a specified color?

  constructor() {
    this.#colorScheme = [];
  }

  /**
   * Generate 3 colors from a given color with a light, medium, and dark shade. All colors represent the same hue.
   * @param {string} color
   */
  generateMonochromaticColorScheme(color) {
    for (let i = 0; i < 2; i++) {
      let newColor;
      if (i === 0) {
        newColor = this.#generateLightColor(color);
      } else if (i === 1) {
        newColor = this.#generateDarkColor(color);
      } 
      this.#colorScheme.push(newColor);
    }
    return this.#colorScheme;
  }

  #splitColorStringIntoArray(colorString) {
    // An array of strings with values from the string representing rgb.
    colorString = colorString.split("(")[1].split(")")[0].split(",");

    // Create an array of numbers for the dark colour's rgb.
    const rgbValuesArray = [];
    for (let i = 0; i < colorString.length; i++) {
      let rgbValue = parseInt(colorString[i]);
      rgbValuesArray.push(rgbValue);
    }
    return rgbValuesArray;
  }

  #generateLightColor(color) {
    const originalColorArray = this.#splitColorStringIntoArray(color);

    // Random lighten, while keeping it the same colour.
    const lightenFactor = Math.random() * 0.5 + 0.5;

    // Lighten the color components, ensuring they stay within [0, 255]
    const lightenedColor = [];
    for (let i = 0; i < 3; i++) {
      let lightenedRgbComponent =
        originalColorArray[i] + (255 - originalColorArray[i]) * lightenFactor;
      lightenedRgbComponent = Math.min(255, Math.max(0, lightenedRgbComponent));
      lightenedColor.push(Math.round(lightenedRgbComponent));
    }

    // Create the lightened color string
    const lightColorString = `rgb(${lightenedColor[0]}, ${lightenedColor[1]}, ${lightenedColor[2]})`;

    return lightColorString;
  }

  #generateDarkColor(color) {
    const rgbValuesArray = this.#splitColorStringIntoArray(color);

    // Set a random darken factor.
    const darkenFactor = Math.random() * 0.5 - 0.5;

    // Darken the color components, ensuring they stay within [0, 255].
    const darkenedColorArray = [];
    for (let i = 0; i < 3; i++) {
      // in a dark color, the rgb values are lower than the original color, so we should subtract the difference between 0 and the original color.
      let darkenedRgbComponent =
        rgbValuesArray[i] - (0 - rgbValuesArray[i]) * darkenFactor;
      // make sure the rgb component is between 0 and 255
      darkenedRgbComponent = Math.min(255, Math.max(0, darkenedRgbComponent));
      darkenedColorArray.push(Math.round(darkenedRgbComponent));
    }
    // turn the array into a string
    const darkColorString = "rgb(" + darkenedColorArray.join(", ") + ")";
    return darkColorString;
  }

  generateAnalogousColorScheme(color) {
    // an analogous color scheme is a color scheme that uses colors that are next to each other on the color wheel.
    for (let i = 0; i < 2; i++) {
      let newColor;
      if (i === 0) {
        // go  to the left of the color.
        newColor = this.#generateClockwise(color);
      } else {
        // go to the right of the color.
        newColor = this.#generateCounterClockwise(color);
      }
      this.#colorScheme.push(newColor);
    }
    return this.#colorScheme;
  }

  #generateClockwise(color) {
    const rgbValuesArray = this.#splitColorStringIntoArray(color);
    let red = rgbValuesArray[0];
    let green = rgbValuesArray[1];
    let blue = rgbValuesArray[2];


    // console.log("the color is", color);
    for (let i = 0; i < rgbValuesArray.length; i++) {
      // if i have green i want to go to green/blue
      // if i have green/blue i want to go to blue
      // if i have blue i want to go to blue/violet
      // if i have blue/violet i want to go to violet
      // and so on

      // compare all the rgb values to see which one is the highest
      // red is color[0], here we check if red is the highest
      if (red > green && red > blue) {
        // red is the highest, add to green
        green = green + 20;
      }

      // green is color[1], here we check if green is the highest
      if (green > red && green > blue) {
        // green is the highest, add to blue
        blue = blue + 20;
      }

      // blue is color[2], here we check if blue is the highest
      if (blue > red && blue > green) {
        // blue is the highest, add to red
        red = red + 20;
      }
    }
    // make it a string again
    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    // console.log("the new color is", color)
    return color;
  }

  #generateCounterClockwise(color) {
    const rgbValuesArray = this.#splitColorStringIntoArray(color);
    let red = rgbValuesArray[0];
    let green = rgbValuesArray[1];
    let blue = rgbValuesArray[2];

    for (let i = 0; i < rgbValuesArray.length; i++) {
      // if i have green i want to go to yellow/green
      // if i have yellow/green i want to go to yellow
      // if i have yellow i want to go to yellow/orange
      // if i have yellow/orange i want to go to orange
      // This website has been used to check the validity of the color scheme and the relationship of rgb in generating analogous colors: https://www.crispedge.com/generate-analogous-color/ 

      // compare all the rgb values to see which one is the highest
      if (red > green && red > blue) {
        // red is the highest, add to blue
        blue = blue + 20;
      }

      if (green > red && green > blue) {
        // green is the highest, add to red
        red = red + 20;
      }

      if (blue > red && blue > green) {
        // blue is the highest, add to green
        green = green + 20;
      }
    }
    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
  }
}
