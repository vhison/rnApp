'use strict'
import { StyleSheet, Platform, Dimensions } from 'react-native'
import { color } from '../../theme'

const { width: screenWidth } = Dimensions.get('window')
export const styles = StyleSheet.create({
  addView: {
    backgroundColor: color.palette.HighSlateBlue,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearView: {
    backgroundColor: color.palette.angry,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showUsers: {
    backgroundColor: color.palette.gradeD,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
    paddingVertical: 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  sliderContainer: { backgroundColor: color.palette.grainBoro, height: 400 },
  sliderBottom: {
    backgroundColor: color.palette.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    color: color.palette.black,
  },
})
