'use strict'
import { StyleSheet } from 'react-native'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  headerContainerMain: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainerBackImage: { height: 12, width: 12 },
  headerContainerBackText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: color.palette.gray,
  },
  headerContainerButtonsText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: color.palette.white,
  },
  buttonContainerImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginVertical: 12,
  },
  buttonContainerMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
    color: color.palette.white,
  },
  headerContainerCenterImage: { height: 40, width: 150 },
  containerCenterImage: { height: 25, width: 25 },
  centerImage : { height: 24, width: 24 },
  containerImage: { height: 15, width: 15 },
  headerContainerLeftImage: { height: 20, width: 25 },
  headerContainerRightImage: { height: 20, width: 22.5 },
  tinyImage: { height: 8, width: 4 },
})
