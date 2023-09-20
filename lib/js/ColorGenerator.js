/**
 * Generates a color either randomly or specified.
 */
export class ColorGenerator {
  // The color is an array of 3 numbers between 0 and 255.
  #color;

  constructor() {
    this.#color = [0, 0, 0];
  }
  /**
   * The method generates a random rbg color in string format.
   *
   * @returns {string} color - a random rgb color in string format.
   */
  generateRandomColor() {
    this.#color = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];

    this.#color = this.#makeColorArrayIntoString(this.#color);
    return this.#color;
  }
  /**
   * The method generates a light rbg color in string format. The values are randomized, between 155 and 255 rgb.
   * @returns {string} color - a light rgb color in string format.
   */
  generateLightColor() {
    this.#color = [
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
    ];

    // Check how light the color is. If it's not light enough, add +10 to every value.
    if (this.#color[0] < 200 && this.#color[1] < 200 && this.#color[2] < 200) {
      this.#color[0] = this.#color[0] + 10;
      this.#color[1] = this.#color[1] + 10;
      this.#color[2] = this.#color[2] + 10;
    }

    this.#color = this.#makeColorArrayIntoString(this.#color);
    return this.#color;
  }

  /**
   * The method generates a dark rbg color in string format. The values are randomized between 0 and 100 rbg.
   * @returns {string} color - a dark rgb color in string format.
   */
  generateDarkColor() {
    this.#color = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];
    // Check how dark the color is. If it's not dark enough, substract 10 from every value.
    if (this.#color[0] > 50 && this.#color[1] > 50 && this.#color[2] > 50) {
      this.#color[0] = this.#color[0] - 10;
      this.#color[1] = this.#color[1] - 10;
      this.#color[2] = this.#color[2] - 10;
    }

    this.#color = this.#makeColorArrayIntoString(this.#color);
    return this.#color;
  }

  #makeColorArrayIntoString(array) {
    const colorString = "rgb(" + array.join(", ") + ")";
    return colorString;
  }
}
