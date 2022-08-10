import * as React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Modal, Pressable } from 'react-native'
import { Button } from '../button/button'
import { styles } from './styles'
export interface WelcomeModalProps {
  heading: string
  title: string
  type: string
  onContinue(): void
  onCancel(): void
  onClickLink(): void
}
export function WelcomeModal(props: WelcomeModalProps) {
  const { heading, title, type, onContinue, onCancel, onClickLink } = props
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        onCancel()
      }}
    >
      <TouchableWithoutFeedback onPress={() => onCancel()}>
        <View style={styles.modalContainer}></View>
      </TouchableWithoutFeedback>
      <View
        style={type === 'accept' || type === 'complete' || type === 'info' ? styles.modalMainLarge : styles.modalMain}
      >
        <TouchableOpacity>
          {type === 'connectPeloton' && (
            <Image
              style={{ width: 250, height: 40 }}
              source={require('../../assets/HeaderLogo.png')}
              resizeMode="contain"
            />
          )}
          {type === 'connectPaypal' && (
            <Image
              style={{ width: 250, height: 40 }}
              source={require('../../assets/HeaderLogo.png')}
              resizeMode="contain"
            />
          )}
          {type === 'accept' && (
            <Image
              style={{ width: 250, height: 40 }}
              source={require('../../assets/HeaderLogo.png')}
              resizeMode="contain"
            />
          )}
          {type === 'complete' && (
            <Image
              style={{ width: 250, height: 40 }}
              source={require('../../assets/completeIcon.png')}
              resizeMode="contain"
            />
          )}
          {type === 'info' && (
            <Image
              style={{ width: 250, height: 40 }}
              source={require('../../assets/infoLargeIcon.png')}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
        <View style={styles.modalBody}>
          <Text style={styles.modalBodyHeading}>{type === 'connectPaypal' ? 'Pay Amount $' + heading : heading}</Text>
          {type !== 'connectPeloton' && <Text style={styles.modalBodyTitle}>{title}</Text>}
        </View>
        {type === 'accept' && (
          <Button name="Accept" type="primarysmall" isLoading={false} onPress={() => onContinue()} />
        )}
        {type === 'complete' && (
          <Button name="Complete" type="primarysmall" isLoading={false} onPress={() => onContinue()} />
        )}
        {type === 'info' && <Button name="Got it" type="primarysmall" isLoading={false} onPress={() => onContinue()} />}
        {type === 'accept' && (
          <Pressable onPress={() => onCancel()} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        )}
        {type === 'connectPeloton' && (
          <Pressable onPress={() => onContinue()} style={styles.pelotonButton}>
            <Image
              style={{ width: 150, height: 40 }}
              source={require('../../assets/pelotonLogo.png')}
              resizeMode="contain"
            />
          </Pressable>
        )}
        {type === 'connectPaypal' && (
          <Pressable onPress={() => onContinue()} style={styles.paypalButton}>
            <Image
              style={{ width: 150, height: 40 }}
              source={require('../../assets/paypalLogo.png')}
              resizeMode="contain"
            />
          </Pressable>
        )}
        <Pressable onPress={() => onClickLink()}>
          {type === 'connectPeloton' && <Text style={styles.linkText}>Get Help</Text>}
        </Pressable>
      </View>
    </Modal>
  )
}
