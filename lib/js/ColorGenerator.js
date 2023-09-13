/**
 * Generates a color either randomly or specified.
 */
export class ColorGenerator {
  // The color is an array of 3 numbers between 0 and 255.
  #color

  constructor() {
    this.#color = [0, 0, 0];
  }

  generateRandomColor() {
    this.#color = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255)
    ]
    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")"
    return this.#color
  }

  generateLightColor() {
    // light colors are bright, so we want to keep the values high.
    this.#color = [
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155
    ]
    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")"
    return this.#color
  }

  generateDarkColor() {
    // dark colors are dark, so we want to keep the values low.
    this.#color = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ]
    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")"
    return this.#color
  }
}