import { observer } from 'mobx-react-lite'
import React from 'react'
import { FlatList, ImageBackground, SafeAreaView, StyleSheet, View, Platform, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { List, Text } from 'react-native-paper'
import { translate } from '../../i18n/translate'
import { Header, Icons } from '../../components'
import styles from '../../styles/globalStyle'
import { scale } from '../../styles/sizes'

const image = require('../../assets/splash.png')
const title = <Text style={styles.headerContainerCenterText}>{translate('screen.admin')}</Text>
export const AdminPanel = observer(() => {
  const navigation = useNavigation()

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])

  const renderItem = ({ item }: any) => (
    <List.Item
      onPress={() => {
        navigation.navigate(item.route)
      }}
      title={item.name}
      right={(props) => (
        <List.Icon {...props} icon="apple-keyboard-control" style={{ transform: [{ rotate: '90deg' }] }} />
      )}
    />
  )
  return (
    <ImageBackground source={image} style={{ ...style.image }}>
      <View style={{ backgroundColor: 'rgba(255,255,255,.9)', flex: 1 }}>
        <SafeAreaView style={styles.fullHeight}>
          <Header
            leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />}
            leftPress={() => navigation.goBack()}
            centerContent={title}
          />
          <FlatList
            data={Navigations}
            keyExtractor={(item, index) => 'route_' + index}
            renderItem={renderItem}
            contentContainerStyle={style.listContainer}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
})
const style = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  listContainer: {
    paddingBottom: 100,
    width: Platform.OS === 'web' ? scale(150) : scale(335),
    alignSelf: 'center',
  },
})

const Navigations = [
  {
    name: translate('admin.rides'),
    route: 'userchallenges',
  },
  {
    name: translate('admin.workouts'),
    route: 'userworkouts',
  },
  {
    name: translate('admin.payments'),
    route: 'transactions',
  },
]
