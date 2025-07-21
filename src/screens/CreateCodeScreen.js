import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { InputCardComponent, GeneratedQRComponent } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import Assets from '../config/assets'


const CreateCodeScreen = () => {

      const [qrValue, setQrValue] = useState("")


  return (

<SafeAreaView style={styles.container}>

        
        <InputCardComponent setQrValue={setQrValue}/>
        <GeneratedQRComponent qrValue={qrValue}/>

</SafeAreaView>
  )
}

export default CreateCodeScreen

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:"100%",
        backgroundColor:Assets.colors.background.SECOND
    },

    
    
})