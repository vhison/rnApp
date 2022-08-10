import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
  TouchableWithoutFeedback,
  BackHandler,
} from 'react-native'
import { Snackbar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Header, Icons, CheckBox, Button, WelcomeModal } from '../../components'
import { translate } from '../../i18n/translate'
import styles from '../../styles/globalStyle'
import { verticalScale } from '../../styles/sizes'

const title = <Text style={styles.headerContainerCenterText}>{translate('screen.createRide')}</Text>
export const CreateRideScreen = observer(() => {
  const navigation = useNavigation()
  const [selectedRide, setSelectedRide] = React.useState<string>('')
  const [selectedInfo, setSelectedInfo] = React.useState<string>('')
  const [infoModal, setInfoModal] = React.useState<boolean>(false)
  const [visible, setVisible] = React.useState(false)
  const onDismissSnackBar = () => setVisible(false)

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const selectRideType = debounce((value: string) => {
    setSelectedRide(value)
  }, 250)
  const nextRide = debounce(() => {
    selectedRide === 'Output' && navigation.navigate('rideoutput')
    selectedRide === 'Streak' && navigation.navigate('ridestreak')
    selectedRide === 'Leader' && navigation.navigate('rideleader')
    selectedRide === '' && setVisible(true)
  }, 250)
  const viewInfo = debounce((value: string) => {
    setSelectedInfo(value)
    setInfoModal(true)
  }, 250)

  return (
    <TouchableWithoutFeedback onPress={() => setInfoModal(false)}>
      <SafeAreaView style={styles.container}>
        <Header
          leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
          leftPress={() => navigation.goBack()}
          centerContent={title}
        />
        <View style={style.rideContainer}>
          <FlatList
            ListHeaderComponent={<Text style={styles.titleInputDark}>{translate('ride.select')}</Text>}
            data={RideTypes}
            renderItem={({ item }) => (
              <CheckBox
                name={item.value}
                type={selectedRide === item.value ? 'primary' : 'secondary'}
                info={true}
                onPress={() => selectRideType(item.value)}
                getInfo={() => viewInfo(item.value)}
              />
            )}
            keyExtractor={(item, index) => 'ridetype_' + index}
            contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
          />
          <Button name={`${translate('button.next')}`} type="primary" isLoading={false} onPress={() => nextRide()} />
        </View>
        {infoModal && Platform.OS === 'web' && (
          <View style={{ position: 'absolute', flex: 1, top: verticalScale(250), alignSelf: 'center' }}>
            <WelcomeModal
              heading={'Info ' + selectedInfo}
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              type="info"
              onCancel={() => setInfoModal(false)}
              onContinue={() => setInfoModal(false)}
              onClickLink={() => null}
            />
          </View>
        )}
        {infoModal && Platform.OS !== 'web' && (
          <WelcomeModal
            heading={'Info ' + selectedInfo}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            type="info"
            onCancel={() => setInfoModal(false)}
            onContinue={() => setInfoModal(false)}
            onClickLink={() => null}
          />
        )}
        <Snackbar
          visible={visible}
          onDismiss={() => onDismissSnackBar()}
          duration={2500}
          style={[styles.bottomViewContainer, { bottom: 40, marginHorizontal: 20 }]}
        >
          {translate('errors.ride')}
        </Snackbar>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
})
const style = StyleSheet.create({
  rideContainer: { flex: 2, justifyContent: 'flex-end', alignItems: 'center' },
  rideSelection: { marginBottom: 216 },
})
const RideTypes = [
  {
    value: 'Output',
  },
  {
    value: 'Streak',
  },
  {
    value: 'Leader',
  },
]
