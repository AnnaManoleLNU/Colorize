/**
 * The FontColorGenerator class generates a font color based on a given background color. The font color with the highest contrast is chosen.
 */
export class FontColorGenerator {
  // Formulas for calculating the contrast between two colors can be found here: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure


  calculateLuminance(color) {
    color = color.slice(4, -1);

    const rgbComponents = color.split(",");

    for (let i = 0; i < rgbComponents.length; i++) {
      rgbComponents[i] = parseInt(rgbComponents[i].trim());
    }

    const rgbComponentsArray = [];
    for (let i = 0; i < 3; i++) {
      rgbComponentsArray[i] = rgbComponents[i];
    }

    // The numbers are taken from: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-procedure
    for (let i = 0; i < rgbComponentsArray.length; i++) {
      rgbComponentsArray[i] /= 255;
      if (rgbComponentsArray[i] <= 0.03928) {
        rgbComponentsArray[i] /= 12.92;
      } else {
        rgbComponentsArray[i] = Math.pow(
          (rgbComponentsArray[i] + 0.055) / 1.055,
          2.4
        );
      }
    }

    let luminance =
      0.2126 * rgbComponentsArray[0] +
      0.7152 * rgbComponentsArray[1] +
      0.0722 * rgbComponentsArray[2];

    return luminance;
  }

  calculateContrastRatio(color1, color2) {
    const luminance1 = this.calculateLuminance(color1);
    const luminance2 = this.calculateLuminance(color2);

    let darkColor;
    let lightColor;

    if (luminance1 > luminance2) {
      darkColor = luminance1;
      lightColor = luminance2;
    } else {
      darkColor = luminance2;
      lightColor = luminance1;
    }

    const contrastRatio = (darkColor + 0.05) / (lightColor + 0.05);
    console.log(contrastRatio)

    if (contrastRatio >= 4.5) {
      console.log("the contrast ratio is high enough according to W3 standards");
    } else {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
    return contrastRatio;
  }
}