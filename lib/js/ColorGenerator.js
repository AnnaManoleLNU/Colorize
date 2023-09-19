/**
 * Generates a color either randomly or specified.
 */
export class ColorGenerator {
  // The color is an array of 3 numbers between 0 and 255.
  #color;

  constructor() {
    this.#color = [0, 0, 0];
  }

  generateRandomColor() {
    this.#color = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")";
    return this.#color;
  }

  generateLightColor() {
    // Generate a random color with values between 155 and 255. Adding at least 155 ensures that the color is light enough.
    this.#color = [
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
    ];

    // Check how light the color is. If it's not light enough, add +10 to every value.
    if (this.#color[0] < 200 && this.#color[1] < 200 && this.#color[2] < 200) {
      // console.log("the color is not light enough");
      this.#color[0] = this.#color[0] + 10;
      this.#color[1] = this.#color[1] + 10;
      this.#color[2] = this.#color[2] + 10;
    }

    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")";
    return this.#color;
  }

  generateDarkColor() {
    // dark colors are dark, so we want to keep the values low.
    this.#color = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    // console.log("the color is", this.#color);
    // Check how dark the color is. If it's not dark enough, substract 10 from every value.
    if (this.#color[0] > 50 && this.#color[1] > 50 && this.#color[2] > 50) {
      // console.log("the color is not dark enough");
      this.#color[0] = this.#color[0] - 10;
      this.#color[1] = this.#color[1] - 10;
      this.#color[2] = this.#color[2] - 10;
      // console.log("the color is now", this.#color);
    }

    // turn the array into a string
    this.#color = "rgb(" + this.#color.join(", ") + ")";
    return this.#color;
  }
}
