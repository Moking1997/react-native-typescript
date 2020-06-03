import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputItem from '@ant-design/react-native/lib/input-item'
import Button from '@ant-design/react-native/lib/button'

export interface Props {
  addItem: any
}

const AddItem: React.FC<Props> = (props) => {
  const { addItem } = props
  const [text, setText] = useState('')
  return (
    <View>
      <InputItem value={text} placeholder="xx" onChange={(text) => setText(text)}>
        输入
      </InputItem>
      <Button
        onPress={() => {
          addItem(text)
        }}
        type="primary"
      >
        添加
      </Button>
      <TouchableOpacity>
        <Text>number</Text>
      </TouchableOpacity>
    </View>
  )
}

// styles
const styles = StyleSheet.create({})

export default AddItem
