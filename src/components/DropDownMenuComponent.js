import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'

const DropDownMenuComponent = ({value, onChangeValue, width, height}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Purple', value: 'purple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Black', value: 'black' },
  { label: 'Gray', value: 'gray' },
  { label: 'Pink', value: 'pink' },
  ]);

  return (
    <View style={styles.container}>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={onChangeValue}
      setItems={setItems}
      placeholder='Choose a color..'
      theme='LIGHT'
      mode="BADGE"
      dropDownDirection="TOP"
      listMode="FLATLIST"
      style={{width:width, height:height, alignItems:"center", justifyContent:"center" }}
      
    />
    </View>

  );



}

export default DropDownMenuComponent

const styles = StyleSheet.create({

    container:{
        
    }

})