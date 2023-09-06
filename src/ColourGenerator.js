/**
 * Generates a colour either randomly or based on a given string.
 */
export class ColourGenerator {
  // The RGB colour is an array of 3 numbers between 0 and 255.
  #colour
  constructor() {
    this.#colour = [0, 0, 0]
  }

  generateRandomColour() {
    this.#colour = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ]
    return this.#colour
  }
}