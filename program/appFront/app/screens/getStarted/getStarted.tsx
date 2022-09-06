import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'
import { useStore } from '../../models'
import style from '../../styles/globalStyle'
import { styles } from './styles'
const { width: screenWidth } = Dimensions.get('window')
export const GetStarted = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const session = store.session
  // useEffect(() => {}, [])

  const renderSlider = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.sliderBottom}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={style.containerWhite}>
      <View style={styles.sliderContainer}>
        <Carousel
          layout="tinder"
          layoutCardOffset={11}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={ENTRIES}
          renderItem={({ item, index }, parallaxProps) => renderSlider({ item, index }, parallaxProps)}
          hasParallaxImages={true}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => session.setInput(session.input + 1)}>
          <View style={styles.addView}>
            <Text> Add +1 </Text>
          </View>
        </TouchableOpacity>
        <Text> Welcome To App!{session.input}</Text>
        <TouchableOpacity onPress={() => session.setInput(0)}>
          <View style={styles.clearView}>
            <Text> Clear </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('userlist')}>
          <View style={styles.showUsers}>
            <Text> Show Users </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
})
const ENTRIES = [
  {
    title: 'Favourites landscapes 1',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/SsJmZ9jl.jpg',
  },
  {
    title: 'Favourites landscapes 2',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/5tj6S7Ol.jpg',
  },
  {
    title: 'Favourites landscapes 3',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/pmSqIFZl.jpg',
  },
  {
    title: 'Favourites landscapes 4',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/cA8zoGel.jpg',
  },
  {
    title: 'Favourites landscapes 5',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/pewusMzl.jpg',
  },
  {
    title: 'Favourites landscapes 6',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/l49aYS3l.jpg',
  },
  {
    title: 'Favourites landscapes 1',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/SsJmZ9jl.jpg',
  },
  {
    title: 'Favourites landscapes 2',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/5tj6S7Ol.jpg',
  },
  {
    title: 'Favourites landscapes 3',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/pmSqIFZl.jpg',
  },
  {
    title: 'Favourites landscapes 4',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/cA8zoGel.jpg',
  },
  {
    title: 'Favourites landscapes 5',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/pewusMzl.jpg',
  },
  {
    title: 'Favourites landscapes 6',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/l49aYS3l.jpg',
  },
]
/**
|--------------------------------------------------
| yarn add react-native-snap-carousel
| yarn add @types/react-native-snap-carousel
|
| yarn add deprecated-react-native-prop-types@2.2.0 
| Extract and Replace src.zip attached in app/extra with below path 
| program/appFront/node_modules/react-native-snap-carousel/src
| 
| Output screens are attached here program/appFront/app/extra
|--------------------------------------------------
*/