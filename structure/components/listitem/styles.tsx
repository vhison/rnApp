'use strict'
import { StyleSheet, Platform } from 'react-native'
import { scale } from '../../styles/sizes'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  listItemMain: {
    width: Platform.OS === 'web' ? scale(150) : Platform.OS == 'ios' ? 376 : scale(366),
    height: 77,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  listItemLeft: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemCenter: {
    width: Platform.OS == 'web' ? scale(334) : Platform.OS == 'ios' ? 247 : scale(214),
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  listItemTitle: {
    color: color.palette.black,
    width: scale(129),
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  listItemDescription: {
    color: color.palette.black,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  itemLabel: {
    position: 'absolute',
    top: 25,
    left: 70,
    color: color.palette.gray,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  },
  itemRow: {
    flexDirection: 'row',
    width: scale(105),
    height: 12,
  },
  itemRowtext: {
    color: color.palette.black,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.85,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  listItemRight: {
    height: 25,
    justifyContent: 'center',
  },
  itemRightText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: color.palette.HighSlateBlue,
  },
  rankText: {
    color: color.palette.HighSlateBlue,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
  rankLabel: {
    color: color.palette.gray,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 11.5,
    textAlign: 'center',
    letterSpacing: -0.24,
  },
})
