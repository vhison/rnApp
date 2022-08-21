import { debounce } from 'lodash'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { translate } from '../../i18n/translate'
import { Header, Icons } from '../../components'
import { useStore } from '../../models'
import styles from '../../styles/globalStyle'
import { color } from '../../theme'

export const SearchCharity = observer(() => {
  const navigation = useNavigation()
  const route = useRoute()
  const { optedCharity } = route.params
  const store = useStore()
  const [allCharity, setAllCharity] = React.useState([{}])
  const [selectedCharity, setSelectedCharity] = React.useState<[]>()
  const [searchQuery, setSearchQuery] = React.useState('')
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    getCharity()
  }, [])

  const getCharity = async () => {
    try {
      setIsLoading(true)
      let obj = { page: '1' }
      const data = await store.api.queryGetCharity(
        obj,
        'id name alias city country disbursement_type ngo_id postal_code profile_url region street1 street2'
      )
      if (data.getCharity) {
        setAllCharity(data.getCharity)
        setSelectedCharity(data.getCharity)
      }
    } catch (error) {
      console.log('getCharity error==>', error)
    } finally {
      setIsLoading(false)
    }
  }
  const chooseCharity = debounce((item) => {
    optedCharity(item)
    navigation.goBack()
  }, 250)
  const onChangeSearch = (query: string) => {
    if (query === '') {
      setSelectedCharity(undefined)
    } else {
      const newData = allCharity.filter((item) => {
        const itemData = `${item.name.toUpperCase()}   
          ${item.city.toUpperCase()} `
        const textData = searchQuery.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setSelectedCharity(newData)
    }
    setSearchQuery(query)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header leftContent={<Icons name={`${translate('button.back')}`} type="back" header={true} />} leftPress={() => navigation.goBack()} />
      <View style={{ alignItems: 'center' }}>
        <Searchbar
          placeholder="Search Charity"
          onChangeText={(text: string) => {
            onChangeSearch(text)
          }}
          value={searchQuery}
          style={styles.searchInput}
          selectionColor={color.palette.black}
          autoCapitalize="none"
          autoFocus={false}
        />
        {selectedCharity && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={selectedCharity}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  marginVertical: 2,
                  height: 40,
                  alignSelf: 'center',
                }}
                onPress={() => chooseCharity(item)}
              >
                <Text numberOfLines={1} style={{ color: color.palette.black, fontSize: 14 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => 'charity_' + index}
            contentContainerStyle={{ paddingBottom: 200 }}
          />
        )}
      </View>
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator animating size={40} color="#B81C2D" />
        </View>
      )}
    </SafeAreaView>
  )
})
