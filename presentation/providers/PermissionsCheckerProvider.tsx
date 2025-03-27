import {PropsWithChildren, useEffect, useRef} from "react";
import {AppState, Platform} from "react-native";
import {router} from "expo-router";

import {PermissionStatus} from "@/infrastructure/interfaces/location";
import {usePermissionsStore} from "@/presentation/store/usePermissionsStore";

const focusEvent = Platform.OS === 'android' ? 'focus' : 'change';

const PermissionsCheckerProvider = ({children}: PropsWithChildren) => {
    const {locationStatus, checkLocationPermission} = usePermissionsStore();

    const appState = useRef(AppState.currentState);

    useEffect(() => {
        if (locationStatus === PermissionStatus.GRANTED) {
            router.replace("/map");
        } else if (locationStatus !== PermissionStatus.CHECKING) {
            router.replace('/permissions')
        }
    }, [locationStatus]);

    useEffect(() => {
        checkLocationPermission()
            .catch(console.error);
    }, []);


    useEffect(() => {
        const subscription = AppState.addEventListener(focusEvent, (nextAppState) => {
            console.log({nextAppState});
            if (nextAppState === appState.current) return;
            const isTransitioningToForeground = appState.current.match(/inactive|background/) && nextAppState === 'active';
            if (isTransitioningToForeground)
                checkLocationPermission().catch(console.error);
            // if (Platform.OS === 'android' || nextAppState === 'active') {
            //     checkLocationPermission()
            //         .catch(console.error);
            // }
            appState.current = nextAppState;
        })

        return () => {
            subscription.remove();
        }

    }, []);

    return <>{children}</>;
}

export default PermissionsCheckerProvider;
