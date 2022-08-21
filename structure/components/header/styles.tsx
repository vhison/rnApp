'use strict'
import { StyleSheet, Platform } from 'react-native'
import { scale, verticalScale } from '../../styles/sizes'

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
  },
  itemLeft: {
    width: Platform.OS == 'ios' ? '25%' : '30%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: Platform.OS == 'ios' ? 10 : 5,
  },
  itemCenter: {
    width: Platform.OS == 'ios' ? '50%' : '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemRight: {
    width: Platform.OS == 'ios' ? '25%' : '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: Platform.OS == 'ios' ? 10 : 5,
  },
})
