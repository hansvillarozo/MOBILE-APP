import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <Text className="text-4xl font-mpopOneReg">Welcome, Juarez! </Text> 
      <Link className="text-xl font-mpopOneReg" href="./profile"> Go To Profile</Link>
      <Link className="text-xl font-mpopOneReg" href="./signup"> Signup</Link>
      <Link className="text-xl font-mpopOneReg" href="./login"> Login</Link>
    </View>
  )
}

export default index

// const styles = StyleSheet.create({
//     container:{ 
//         display: 'flex',
//         flex:1,
//         alignItems:'center',
//         justifyContent: 'center',

//     }
// })