import { View, Text, StyleSheet } from "react-native";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import MapView from "react-native-maps";

const MapScreen = () => {
  const {locationStatus} = usePermissionsStore();
  return (
      <View style={{flex: 1}}>
        <MapView initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} style={styles.map}/>
      </View>
  )
}
export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});