import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { usePermissionsStore } from "@/presentation/store/usePermissionsStore";
import MapView from "react-native-maps";
import CustomMap from "@/presentation/components/maps/CustomMap";
import { useLocationStore } from "@/presentation/store/useLocationStore";
import { useEffect } from "react";

const MapScreen = () => {
  const {locationStatus} = usePermissionsStore();

  const {lastKnowLocation, getLocation} = useLocationStore();

  useEffect(() => {
    if (!lastKnowLocation) getLocation().catch(console.error);

  }, [])


  if (!lastKnowLocation) {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>laSTlOCATION:{lastKnowLocation}</Text>
      <ActivityIndicator/>
    </View>)
  }

  return (
      <View style={{flex: 1}}>

        <CustomMap initialLocation={lastKnowLocation}
                   showUserLocation={true}
        ></CustomMap>

        {/*<MapView initialRegion={{*/}
        {/*  latitude: 37.78825,*/}
        {/*  longitude: -122.4324,*/}
        {/*  latitudeDelta: 0.0922,*/}
        {/*  longitudeDelta: 0.0421,*/}
        {/*}} style={styles.map}/>*/}
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