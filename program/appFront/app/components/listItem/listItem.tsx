import * as React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { styles } from './styles'
interface userDataModel {
  item: {
    avatar: string
    email: string
    first_name: string
    last_name: string
    id: string
  }
}
export function ListItem(props: userDataModel) {
  const { avatar, email, first_name } = props.item
  return (
    <Card.Title
      title={first_name}
      subtitle={email}
      left={props => <Avatar.Image size={24} source={{ uri: avatar }} />}
    />
  )
}
