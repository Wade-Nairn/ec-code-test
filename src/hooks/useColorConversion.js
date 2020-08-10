import { useState } from 'react'

import { colorConversions } from '../helpers/colorConversions'

export const useColorConversion = (values) => {
  const [state, setState] = useState(null);
  const conversion = () => {
    const rgb = colorConversions.HSLToRGB(values)
    setState(rgb)
  }
  return [state, conversion]
}