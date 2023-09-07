/**
 * The ColorSchemeGenerator class generates a color scheme from a given color.
 */
export class ColorSchemeGenerator {
  // The color scheme is an array of 3 colors.
  #colorScheme

  constructor() {
    this.#colorScheme = []
  }
  /**
   * Generate 3 colors from a given color with a light, medium, and dark shade. All colors represent the same hue.
   * @param {string} color 
   */
  generateMonochromaticColorScheme(color) {
    for (let i = 0; i <= 3; i++) {
      let newColor = color
      if (i === 0) {
        newColor = this.#generateLightColor(color)
      } else if (i === 1) {
        newColor = this.#generateDarkColor(color)
      } else {
        newColor = this.#generateMutedColor(color)
      }
      this.#colorScheme.push(newColor)  
    }
  }



  #generateLightColor(color) {

  }

  #generateDarkColor(color) {
  }

  #generateMutedColor(color) {

  }

}