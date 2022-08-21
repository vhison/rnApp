import React from 'react'
import { observer } from 'mobx-react-lite'
import { SafeAreaView } from 'react-native'
import Swiper from 'react-native-swiper'
import FirstView from './first-view'
import SecondView from './second-view'
import ThirdView from './third-view'
import styles from '../../styles/globalStyle'

export const GetStarted = observer(() => {
  const [swipeIndex, setSwipeIndex] = React.useState(0)
  const swiperRef = React.useRef(null)

  const onNext = (value: number) => {
    swiperRef.current.scrollTo(value)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsButtons={false}
        loop={false}
        index={swipeIndex}
        dotStyle={{ backgroundColor: 'transparent' }}
        activeDotStyle={{ backgroundColor: 'transparent' }}
        onIndexChanged={(index) => {
          setSwipeIndex(index)
        }}
      >
        <FirstView onNext={(value: number) => onNext(value)} />
        <SecondView onNext={(value: number) => onNext(value)} />
        <ThirdView />
      </Swiper>
    </SafeAreaView>
  )
})
