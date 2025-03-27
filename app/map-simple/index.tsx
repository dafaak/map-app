import { View, Text, StyleSheet } from "react-native";
import { usePermissionsStore } from "@/presentation/store/usePermissions";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  const {locationStatus} = usePermissionsStore();
  return (
      <View style={{flex: 1}}>
        <MapView initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} style={styles.map}>

          <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              title={'You are here'}
          />
          <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4124,
              }}
              title={'You are here'}
          />

        </MapView>
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