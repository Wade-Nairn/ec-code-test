export const LIST_URL = "https://challenge.structrs.com/rest/colors/list-extended"

export const COLOR_TYPES = [
  {
    kind: "hsl",
    conversionFunction: "HSLToRGB"
  },
  {
    kind: "rgb",
    conversionFunction: "formatRGB"
  },
  {
    kind: "brgb",
    conversionFunction: "BRGBToRGB"
  }
]