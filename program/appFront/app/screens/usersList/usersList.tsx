import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Appbar } from 'react-native-paper'
import { getUserListsAPI } from '../../models/Api/methods/storeAPI'
import { ListItem } from '../../components'
// import { useStore } from '../../models'
import styles from '../../styles/globalStyle'

export const UsersList = observer(() => {
  const navigation = useNavigation()
  // const store = useStore()
  // const session = store.session

  const [challenges, setChallenges] = useState([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  useEffect(() => {
    getUsers()
  }, [])
  const getUsers = async () => {
    getUserListsAPI()
      .then(users => {
        console.log('USERS: ', users)
        if (users.data.length > 0) {
          const usersData = users.data
          setChallenges(usersData)
        }
      })
      .catch(error => {
        console.log('ERROR', error)
      })
      .finally(() => setIsLoading(false))
  }
  return (
    <SafeAreaView style={styles.containerWhite}>
      <Appbar.Header style={{ backgroundColor: '#FFFFFF' }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} color={'#000000'} />
      </Appbar.Header>
      {isLoading && <ActivityIndicator animating size={40} color="#B81C2D" />}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={challenges}
        renderItem={({ item, index }) => <ListItem item={item} />}
        keyExtractor={(item, index) => 'users_' + index}
        ListEmptyComponent={
          <View style={{ alignItems: 'center' }}>
            <Text style={{ paddingVertical: 20 }}>No Record</Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </SafeAreaView>
  )
})
