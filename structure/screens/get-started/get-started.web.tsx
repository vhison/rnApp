import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-web-swiper'
import FirstView from './first-view'
import SecondView from './second-view'
import ThirdView from './third-view'
import { color } from '../../theme'

export const GetStarted = observer(() => {
  const navigation = useNavigation()
  const swiperRef = React.useRef(null)
  const onNext = (value: number) => {
    console.log('onNext==>', value)
  }
  const onGetStarted = () => {
    navigation.navigate('signup')
  }

  return (
    <SafeAreaView style={style.container}>
      <Swiper ref={swiperRef} controlsEnabled={false} containerStyle={{ paddingTop: 50 }}>
        <FirstView onNext={(value: number) => swiperRef.current.goTo(1)} />
        <SecondView onNext={(value: number) => swiperRef.current.goTo(2)} />
        <ThirdView onNext={(value: number) => onNext(value)} onGetStarted={() => onGetStarted()} />
      </Swiper>
    </SafeAreaView>
  )
})
const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: color.palette.white },
})
