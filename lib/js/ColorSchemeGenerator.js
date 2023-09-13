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
    for (let i = 0; i < 3; i++) {
      let newColor
      if (i === 0) {
        newColor = this.#generateLightColor(color)
      } else if (i === 1) {
        newColor = this.#generateDarkColor(color)
      } else {
        newColor = this.#generateMutedColor(color)
      }
      this.#colorScheme.push(newColor)  
    }
    return this.#colorScheme
  } 

  #generateLightColor(color) {
    // turn the string into an array
    color = color.split("(")[1].split(")")[0].split(", ")
    console.log(color)

    // from a given color generate a light color
    let lightColor = [
      color[0] - (Math.floor(Math.random() * 100)),
      color[1] - (Math.floor(Math.random() * 100)),
      color[2] - (Math.floor(Math.random() * 100))
    ]
    // turn the array into a string
    lightColor = "rgb(" + lightColor.join(", ") + ")"
    return lightColor
  }

  #generateDarkColor(color) {
    // from a given color generate a dark color
    color = color.split("(")[1].split(")")[0].split(", ")
    // turn color[1] into a number
    let darkColor = [
      parseInt(color[0]) + 100,
      parseInt(color[1]) + 2,
      parseInt(color[2]) + 3
    ]
    // turn the array into a string
    darkColor = "rgb(" + darkColor.join(", ") + ")"
    console.log('the dark color', darkColor)
    return darkColor
  }

  #generateMutedColor(color) {
    let mutedColor = [
      Math.floor(Math.random() * 100) + 100,
      Math.floor(Math.random() * 100) + 100,
      Math.floor(Math.random() * 100) + 100
    ]
    // turn the array into a string
    mutedColor = "rgb(" + mutedColor.join(", ") + ")"
    return mutedColor
  }

}