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
    for (let i = 0; i < 3; i++) {
      let newColor;
      if (i === 0) {
        newColor = this.#generateLightColor(color);
      } else if (i === 1) {
        newColor = this.#generateDarkColor(color);
      } else {
        newColor = this.#generateMutedColor(color);
      }
      this.#colorScheme.push(newColor);
    }
    return this.#colorScheme;
  }

  #generateLightColor(color) {
    // turn the string into an array
    color = color.split("(")[1].split(")")[0].split(", ");

    // from a given color generate a light color
    let lightColor = [
      color[0] - Math.floor(Math.random() * 100),
      color[1] - Math.floor(Math.random() * 100),
      color[2] - Math.floor(Math.random() * 100),
    ];
    // turn the array into a string
    lightColor = "rgb(" + lightColor.join(", ") + ")";
    return lightColor;
  }

  #generateDarkColor(color) {
    // from a given color generate a dark color
    color = color.split("(")[1].split(")")[0].split(", ");
    // turn color[1] into a number
    let darkColor = [
      parseInt(color[0]) + 100,
      parseInt(color[1]) + 2,
      parseInt(color[2]) + 3,
    ];
    // turn the array into a string
    darkColor = "rgb(" + darkColor.join(", ") + ")";
    return darkColor;
  }

  #generateMutedColor(color) {
    let mutedColor = [
      Math.floor(Math.random() * 100) + 100,
      Math.floor(Math.random() * 100) + 100,
      Math.floor(Math.random() * 100) + 100,
    ];
    // turn the array into a string
    mutedColor = "rgb(" + mutedColor.join(", ") + ")";
    return mutedColor;
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
  }

  #generateClockwise(color) {
    color = color.split("(")[1].split(")")[0].split(", ");
    for (let i = 0; i < 3; i++) {
      // if i have green i want to go to green/blue
      // if i have green/blue i want to go to blue
      // if i have blue i want to go to blue/violet
      // if i have blue/violet i want to go to violet
      // and so on

      // compare all the rgb values to see which one is the highest
      // if green is highest add to blue
      // if blue is highest add to add 
      // if red is highest add to green

      // red is color[0], here we check if red is the highest
      if (color[0] > color[1] && color[0] > color[2]) {
        // red is the highest, add to green
        color[1] = color[1] + 10;
    }

      // green is color[1], here we check if green is the highest
      if (color[1] > color[0] && color[1] > color[2]) {
        // green is the highest, add to blue
        color[2] = color[2] + 10;
      }

      // blue is color[2], here we check if blue is the highest
      if (color[2] > color[0] && color[2] > color[1]) {
        // blue is the highest, add to red
        color[0] = color[0] + 10;
      }
    
  }

}

  #generateCounterClockwise(color) {
    color = color.split("(")[1].split(")")[0].split(", ");
    for (let i = 0; i < 3; i++) {
      // if i have green i want to go to yellow/green
      // if i have yellow/green i want to go to yellow
      // if i have yellow i want to go to yellow/orange
      // if i have yellow/orange i want to go to orange
      // and so on
    }
  }
}
