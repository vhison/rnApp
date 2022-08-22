'use strict'
import { StyleSheet, Platform } from 'react-native'
import { moderateScale, scale, verticalScale } from '../styles/sizes'
import { color } from '../theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: color.palette.white,
  },
})
