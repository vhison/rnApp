'use strict'
import { StyleSheet, Platform } from 'react-native'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

export default StyleSheet.create({
  containerMain: { flex: 4, alignItems: 'center', justifyContent: 'center' },
  containerInner: {
    flex: 1,
    alignItems: 'center',
  },
  bannerImage: {
    width: scale(335),
    height: Platform.OS === 'web' ? scale(50) : scale(105),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  bannerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 21.33,
    marginVertical: 12,
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 5,
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 26,
    color: color.palette.black,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    color: color.palette.gray,
    maxWidth: 300,
    textAlign: 'center',
  },
  buttonContainer: { marginTop: 12, alignSelf: 'center' },
  buttonBackground: {
    width: 180,
    height: 50,
    borderRadius: 10,
    backgroundColor: color.palette.HighSlateBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: color.palette.white,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
  },
  connectionLabel: {
    backgroundColor: color.palette.HighSlateBlue,
    width: scale(147),
    maxWidth: '40%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  connectionText: {
    fontSize: 14,
    color: color.palette.white,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16.59,
  },
})
