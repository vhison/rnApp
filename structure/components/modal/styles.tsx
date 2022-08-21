'use strict'
import { StyleSheet, Platform } from 'react-native'
import { scale, verticalScale } from '../../styles/sizes'
import { color } from '../../theme'
export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: color.palette.darkBlack,
    opacity: 0.5,
  },
  modalMainLarge:
    Platform.OS === 'web'
      ? {
          maxWidth: '100%',
          height: verticalScale(259),
          backgroundColor: color.palette.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          margin: 15,
          shadowColor: '#000',
          overflow: 'hidden',
          shadowRadius: 5,
          shadowOpacity: 0.39,
        }
      : {
          position: 'absolute',
          top: '25%',
          left: '5.5%',
          width: scale(334),
          height: Platform.OS === 'ios' ? '40%' : verticalScale(400),
          backgroundColor: color.palette.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        },
  modalMain:
    Platform.OS === 'web'
      ? {
          maxWidth: '100%',
          height: verticalScale(259),
          backgroundColor: color.palette.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          margin: 15,
          shadowColor: '#000',
          overflow: 'hidden',
          shadowRadius: 5,
          shadowOpacity: 0.39,
        }
      : {
          position: 'absolute',
          top: scale(299),
          left: scale(20),
          width: scale(334),
          height: Platform.OS === 'ios' ? verticalScale(229) : verticalScale(259),
          backgroundColor: color.palette.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        },
  modalTop: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginTop: 19,
    marginRight: 20,
  },
  modalTopIcon: { height: 12, width: 12 },
  modalBody: {
    paddingVertical: verticalScale(20),
  },
  modalBodyHeading: {
    fontSize: 16,
    color: color.palette.black,
    lineHeight: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBodyTitle: {
    width: scale(220),
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.59,
    color: color.palette.gray,
    textAlign: 'center',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: color.palette.white,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.59,
    color: color.palette.gray,
    textAlign: 'center',
  },
  pelotonButton: {
    backgroundColor: '#181A1D',
    maxWidth: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  paypalButton: {
    backgroundColor: color.palette.white,
    width: 295,
    maxWidth: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: color.palette.grainBoro,
    borderWidth: 1,
  },
  linkText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    lineHeight: 17,
    marginTop: 20,
    color: color.palette.black,
    textDecorationColor: color.palette.black,
  },
})
