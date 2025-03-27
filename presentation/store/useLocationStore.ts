import { LatLng } from "@/infrastructure/interfaces/lat-lng.interface";
import { LocationSubscription } from "expo-location";
import { create } from "zustand";
import { getCurrentLocation, watchCurrentLocation } from "@/core/actions/location/location";

interface LocationState {
  lastKnowLocation: LatLng | null
  userLocationList: LatLng[]
  watchSubscriptionID: LocationSubscription | null
  getLocation: () => Promise<LatLng | null>
  watchLocation: () => void
  clearWatchLocation: () => void
}

export const useLocationStore = create<LocationState>((set, get) => ({
  lastKnowLocation: null,
  userLocationList: [],
  watchSubscriptionID: null,

  getLocation: async () => {
    const location = await getCurrentLocation();
    console.log({location});
    set({lastKnowLocation: {latitude: location.latitude, longitude: location.longitude}});
    return location;
  },
  watchLocation: async () => {
    const oldSubscription = get().watchSubscriptionID;
    if (oldSubscription) {
      get().clearWatchLocation();
    }

    const watchSubscription = await watchCurrentLocation((location) => {
      set((state) => ({
        userLocationList: [...state.userLocationList, location],
        lastKnowLocation: location,
      }))
    });

    set({watchSubscriptionID: watchSubscription});
  },

  clearWatchLocation: async () => {

    const subscription = get().watchSubscriptionID;

    if (subscription) subscription.remove();
  }

}))