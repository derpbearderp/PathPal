import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Controller() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

//   requestBluetoothPermission = async () => {
//     if (Platform.OS === 'ios') {
//       return true
//     }
//     if (Platform.OS === 'android' && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
//       const apiLevel = parseInt(Platform.Version.toString(), 10)
  
//       if (apiLevel < 31) {
//         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
//         return granted === PermissionsAndroid.RESULTS.GRANTED
//       }
//     const result = await PermissionsAndroid.requestMultiple([
//   PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
//   PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
// ])

// return (
//   result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
//   result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED
// )
//     }
  
//     this.showErrorToast('Permission have not been granted')
  
//     return false
//   }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
