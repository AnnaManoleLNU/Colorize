/**
 * The ColorSchemeGenerator class generates a color scheme from a given color.
 */
export class ColorSchemeGenerator {
  // The color scheme is an array of 2 colors in string format, generated from the given color.
  #colorScheme;

  constructor() {
    this.#colorScheme = [];
  }

  /**
   * The method generates 2 colors that are monochromatic to the given color.
   *
   * @param {string} color - the rgb color to generate the monochromatic color scheme from, in string format.
   * @returns {Array} colorScheme - an array of 2 rbg colors in string format, in monochromatic color scheme.
   */
  generateMonochromaticColorScheme(color) {
    this.#throwErrorIfParamIsNotString(color);

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

  #makeColorStringIntoArrayOfIntegers(colorString) {
    colorString = colorString.split("(")[1].split(")")[0].split(",");

    const rgbValuesArray = [];
    for (let i = 0; i < colorString.length; i++) {
      let rgbValue = parseInt(colorString[i]);
      rgbValuesArray.push(rgbValue);
    }
    return rgbValuesArray;
  }

  #generateColor(color, factor) {
    const rgbValuesArray = this.#makeColorStringIntoArrayOfIntegers(color);

    const colorArray = [];

    for (let i = 0; i < rgbValuesArray.length; i++) {
      let newRgbValue = rgbValuesArray[i] + factor * (255 - rgbValuesArray[i]);
      newRgbValue = Math.min(255, Math.max(0, newRgbValue));
      colorArray.push(Math.round(newRgbValue));
    }

    return `rgb(${colorArray.join(', ')})`;
  }

  #generateLightColor(color) {
    // Random lighten, while keeping it the same color.
    const lightenFactor = Math.random() * 0.5 + 0.5;

    const lightColorString = this.#generateColor(color, lightenFactor);
    return lightColorString;
  }

  #generateDarkColor(color) {
    // Set a random darken factor.
    const darkenFactor = Math.random() * 0.5 - 0.5;

    const darkColorString = this.#generateColor(color, darkenFactor);
    return darkColorString;
  }
  /**
   * The method generates 2 colors that are analogous to the given color.
   *
   * @param {String} color - the rgb color to generate the analogous color scheme from, in string format.
   * @returns {Array} colorScheme - an array of 2 rbg colors in string format, that are analogous to the given color.
   */
  generateAnalogousColorScheme(color) {
    this.#throwErrorIfParamIsNotString(color);
    for (let i = 0; i < 2; i++) {
      let newColor;
      if (i === 0) {
        newColor = this.#generateClockwise(color);
      } else {
        newColor = this.#generateCounterClockwise(color);
      }
      this.#colorScheme.push(newColor);
    }
    return this.#colorScheme;
  }

  #generateClockwise(color) {
    const rgbValuesArray = this.#makeColorStringIntoArrayOfIntegers(color);
    let red = rgbValuesArray[0];
    let green = rgbValuesArray[1];
    let blue = rgbValuesArray[2];

    for (let i = 0; i < rgbValuesArray.length; i++) {
      // Compare all the rgb values to see which one is the highest and perform operations according to forumlas observed on the website: https://www.crispedge.com/generate-analogous-color/

      if (red > green && red > blue) {
        green = green + 20;
      }

      if (green > red && green > blue) {
        blue = blue + 20;
      }

      if (blue > red && blue > green) {
        red = red + 20;
      }
    }

    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
  }

  #generateCounterClockwise(color) {
    const rgbValuesArray = this.#makeColorStringIntoArrayOfIntegers(color);
    let red = rgbValuesArray[0];
    let green = rgbValuesArray[1];
    let blue = rgbValuesArray[2];

    for (let i = 0; i < rgbValuesArray.length; i++) {
      // Compare all the rgb values to see which one is the highest and perform operations according to forumlas observed on the website: https://www.crispedge.com/generate-analogous-color/
      if (red > green && red > blue) {
        blue = blue + 20;
      }

      // Check if green is the highest, then add to red.
      if (green > red && green > blue) {
        red = red + 20;
      }

      if (blue > red && blue > green) {
        green = green + 20;
      }
    }
    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
  }

  #throwErrorIfParamIsNotString(color) {
    if (typeof color !== "string" || color.includes("rgb") === false) {
      throw new Error("The parameter must be a string in rgb format.");
    }
  }
}
