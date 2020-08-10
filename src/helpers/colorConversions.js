export const colorConversions = {
  // Credit for this conversion goes to 
  // https://css-tricks.com/converting-color-spaces-in-javascript/
 HSLToRGB: (values) => {
    let h = values.hue
    let s = values.saturation
    let l = values.lightness
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return "rgb(" + r + "," + g + "," + b + ")";
  },
  formatRGB: (values) => {
    let { red, green, blue } = values
    return "rgb(" + red + "," + green + "," + blue + ")";
  },
  BRGBToRGB: (values) => {
    let { bred, bgreen, bblue } = values
    function calc(value) {
      let NewValue
      const BRGBRange = (10000 - 0)
      if (BRGBRange === 0)
        NewValue = 0
      else {
        const RGBRange = (255 - 0)
        NewValue = (((value - 0) * RGBRange) / BRGBRange) + 0
      }
      return NewValue
    }
    const newR = Math.round(calc(bred))
    const newG = Math.round(calc(bgreen))
    const newB = Math.round(calc(bblue))

    return "rgb(" + newR + "," + newG + "," + newB + ")";
  }
}

