import MapView, { LatLng } from "react-native-maps";
import { StyleSheet, View, ViewProps } from "react-native";
import { useEffect } from "react";
import { useLocationStore } from "@/presentation/store/useLocationStore";

interface Props extends ViewProps {
  initialLocation: LatLng;
  showUserLocation?: boolean;
}

const CustomMap = ({initialLocation, showUserLocation = true, ...rest}: Props) => {

  const {watchLocation, clearWatchLocation} = useLocationStore();

  useEffect(() => {
    watchLocation();
    return () => {
      clearWatchLocation();
    };
  }, []);

  return (
      <View   {...rest}>
        <MapView
            followsUserLocation={true}
            showsUserLocation={showUserLocation}
            initialRegion={{
              latitude: initialLocation.latitude,
              longitude: initialLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.map}
        />
      </View>
  )
}
export default CustomMap;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});