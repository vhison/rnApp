import { Dimensions, PixelRatio } from 'react-native'

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const wp = (widthPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100)
}

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const hp = (heightPercent: any) => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent)

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100)
}

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number)  => screenWidth / guidelineBaseWidth * size;
const verticalScale = (size: number) => screenHeight / guidelineBaseHeight * size;
const moderateScale = (size: number, factor = 0.5) => size + ( scale(size) - size ) * factor;

export { wp, hp, verticalScale, scale, moderateScale }
