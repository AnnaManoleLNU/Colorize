/**
 * The FontColorHelper class tells us whether a font color is WCAG compliant or not, given a background color. It also suggests a either white or black font color, given a background color.
 */
export class FontColorHelper {
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

    if (contrastRatio < 7) {
      console.log("the contrast ratio is too low according to WCAG AAA");
    }  else {
      console.log("the contrast ratio passes WCAG AAA");
    }

    if (contrastRatio < 4.5) {
      console.log("the contrast ratio is too low according to WCAG AA");
    } else {
      console.log("the contrast ratio passes WCAG AA");
    }

    return contrastRatio;
  }

  suggestWhiteOrBlack(backgroundColor) {
    let optimalFontColor = ""; // Initialize to an empty string

    const luminance = this.calculateLuminance(backgroundColor);

    if (luminance > 0.179) {
      optimalFontColor = "rgb(0, 0, 0)";
    } else {
      optimalFontColor = "rgb(255, 255, 255)";
    }

    return optimalFontColor;
  }
}
