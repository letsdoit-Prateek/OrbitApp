import React from 'react'
import { Image } from 'react-native'
import { SvgUri } from 'react-native-svg'

const RenderImage = ({ uri, style }) => {
  const isSvg = uri && uri.toLowerCase().endsWith('.svg')

  if (isSvg) {
    return <SvgUri style={style} uri={uri} height={100} width={100} />
  } else {
    return <Image source={{ uri }} style={style} />
  }
}

export default RenderImage
