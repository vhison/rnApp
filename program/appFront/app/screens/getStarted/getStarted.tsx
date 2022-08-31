import { observer } from 'mobx-react-lite'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
export const GetStarted = observer(() => {
  const navigation = useNavigation()
  const store = useStore()
  const session = store.session

  return (
    <SafeAreaView style={styles.containerWhite}>
      <View>
        <TouchableOpacity onPress={() => session.setInput(session.input + 1)}>
          <View style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }}>
            <Text> Add +1 </Text>
          </View>
        </TouchableOpacity>
        <Text> Welcome To App!{session.input}</Text>
        <TouchableOpacity onPress={() => session.setInput(0)}>
          <View style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}>
            <Text> Clear </Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate('drawer')}>
          <View style={{ backgroundColor: 'pink', padding: 10, borderRadius: 10 }}>
            <Text> OPEN </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  )
})
