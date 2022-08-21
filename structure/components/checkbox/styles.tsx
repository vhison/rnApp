'use strict'
import { StyleSheet, Platform } from 'react-native'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  rowView: { flexDirection: 'row' },
  buttonDark: {
    backgroundColor: color.palette.HighSlateOpacity,
    width: Platform.OS === 'web' ? scale(150) : scale(335),
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  buttonWhite: {
    backgroundColor: color.palette.lighterGrey,
    width: Platform.OS === 'web' ? scale(150) : scale(335),
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  buttonDarkText: {
    fontSize: 16,
    color: color.palette.black,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 18.96,
  },
  rightContent: { position: 'absolute', right: 20, alignItems: 'center' },
})
