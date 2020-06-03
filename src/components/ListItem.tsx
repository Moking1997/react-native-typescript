import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '@ant-design/react-native/lib/button'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export interface Props {
  item: {
    id: number
    name: string
  }
  deleteItem: any
}

const listItem: React.FC<Props> = (props) => {
  const { item, deleteItem } = props

  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.name}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}></Icon>
      </View>
    </TouchableOpacity>
  )
}

// styles
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 0.3,
    borderColor: '#666',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
})

export default listItem
