/**
 * Generates either a random, light or dark color.
 */
export class ColorGenerator {
  // The color is an array of 3 numbers (representing RGB) between 0 and 255.
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
   *
   * @returns {string} color - a light rgb color in string format.
   */
  generateLightColor() {
    this.#color = [
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
      Math.floor(Math.random() * 100) + 155,
    ];

    if (this.#isColorLightEnough() === false) {
      for(let i = 0; i < this.#color.length; i++) {
        this.#color[i] = this.#color[i] + 10;
      }
    }

    this.#color = this.#makeColorArrayIntoString(this.#color);
    return this.#color;
  }

  #isColorLightEnough() {
    if (this.#color[0] < 200 && this.#color[1] < 200 && this.#color[2] < 200) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * The method generates a dark rbg color in string format. The values are randomized between 0 and 100 rbg.
   *
   * @returns {string} color - a dark rgb color in string format.
   */
  generateDarkColor() {
    this.#color = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];

    if (this.#isColorDarkEnough() === false) {
      for(let i = 0; i < this.#color.length; i++) {
        this.#color[i] = this.#color[i] - 10;
      }
    }

    this.#color = this.#makeColorArrayIntoString(this.#color);
    return this.#color;
  }

  #isColorDarkEnough() {
    if (this.#color[0] > 50 && this.#color[1] > 50 && this.#color[2] > 50) {
      return false;
    } else {
      return true;
    }
  }

  #makeColorArrayIntoString(array) {
    const colorString = "rgb(" + array.join(", ") + ")";
    return colorString;
  }
}
