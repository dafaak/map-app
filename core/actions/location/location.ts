import * as Location from 'expo-location';
import { LatLng } from "@/infrastructure/interfaces/lat-lng.interface";

export const getCurrentLocation = async (): Promise<LatLng> => {
  try {
    const {coords} = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });

    return {
      latitude: coords.latitude,
      longitude: coords.longitude,
    };

  } catch (e) {
    throw new Error("Could not get current location");
  }
}

export const watchCurrentLocation = async (callback: (location: LatLng) => void) => {
  const location = await Location.watchPositionAsync({
    accuracy: Location.Accuracy.Highest,
    timeInterval: 1000,
    distanceInterval: 1,
  }, ({coords}) => {
    callback({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  });

  return location;
}