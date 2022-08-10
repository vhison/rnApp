import * as React from 'react'
import { Text, View, Image, Platform } from 'react-native'
import { styles } from './styles'
/**
 *
 * This component is a HOC over the built-in React Native one.
 */
export interface IconsPropTypes {
  name: string
  type: string
  header: boolean
}
export function Icons(props: IconsPropTypes) {
  const { name, type, header } = props
  return (
    <View style={header === true ? styles.headerContainerMain : styles.buttonContainerMain}>
      {type === 'back' && (
        <Image style={styles.headerContainerBackImage} source={require('../../assets/Back.png')} resizeMode="contain" />
      )}
      {type === 'menu' && (
        <Image style={styles.headerContainerLeftImage} source={require('../../assets/MenuIcon.png')} />
      )}
      {type === 'currency' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/roundCurrencyIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'select' && (
        <Image
          style={Platform.OS === 'web' ? styles.containerCenterImage : [styles.centerImage, { marginLeft: 20 }]}
          source={require('../../assets/roundSelectIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'unselect' && (
        <Image
          style={Platform.OS === 'web' ? styles.containerCenterImage : [styles.centerImage, { marginLeft: 20 }]}
          source={require('../../assets/UncheckIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'tick' && (
        <Image
          style={Platform.OS === 'web' ? styles.containerCenterImage : [styles.centerImage, { marginLeft: 20 }]}
          source={require('../../assets/roundTickIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'paypal' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/paypalLogo.png')}
          resizeMode="contain"
        />
      )}
      {type === 'complete' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/completeIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'search' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/searchIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'dropdown' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/dropdownIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'infolarge' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/infoLargeIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'infosmall' && (
        <Image
          style={Platform.OS === 'web' ? styles.containerCenterImage : styles.containerImage}
          source={require('../../assets/infoSmall.png')}
          resizeMode="contain"
        />
      )}
      {type === 'add' && (
        <Image style={styles.containerCenterImage} source={require('../../assets/addIcon.png')} resizeMode="contain" />
      )}
      {type === 'logout' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/logoutIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'invite' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/inviteIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'favourite' && (
        <Image style={styles.containerCenterImage} source={require('../../assets/starIcon.png')} resizeMode="contain" />
      )}
      {type === 'activity' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/activityIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'setting' && (
        <Image
          style={styles.containerCenterImage}
          source={require('../../assets/settingIcon.png')}
          resizeMode="contain"
        />
      )}
      {type === 'logo' && (
        <Image
          style={styles.headerContainerCenterImage}
          source={require('../../assets/HeaderLogo.png')}
          resizeMode="contain"
        />
      )}
      {type === 'arrowright' && (
        <Image style={styles.tinyImage} source={require('../../assets/rightIcon.png')} resizeMode="contain" />
      )}
      {type === 'save' && (
        <Image
          style={
            Platform.OS === 'web'
              ? [styles.buttonContainerImage, { backgroundColor: '#000F3C' }]
              : styles.buttonContainerImage
          }
          source={require('../../assets/SaveIcon.png')}
        />
      )}
      {name !== '' && (
        <Text style={header === true ? styles.headerContainerBackText : styles.headerContainerButtonsText}>{name}</Text>
      )}
    </View>
  )
}
