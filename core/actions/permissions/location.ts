import * as Location from "expo-location";
import {PermissionStatus} from "@/infrastructure/interfaces/location";
import {Alert, Linking} from "react-native";

export const requestLocationPermission = async (): Promise<PermissionStatus> => {
    const {status} = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
        if (status === "denied") {
            console.log("Permission denied");
            manualPermissionRequest().catch(console.error);
        }

        return PermissionStatus.DENIED
    }

    return PermissionStatus.GRANTED;
}

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
    const {status} = await Location.requestForegroundPermissionsAsync();
    switch (status) {
        case "granted":
            return PermissionStatus.GRANTED;
        case "denied":
            return PermissionStatus.DENIED;
        default:
            return PermissionStatus.UNDETERMINED;
    }
}

const manualPermissionRequest = async () => {
    console.log('Manual permission request');
    // Lanzar los ajustes de la app
    Alert.alert('Permiso de ubicacion necesario',
        'Para continuar habilite el permiso de localizacion en los ajustes',
        [
            {
                text: 'Abrir ajustes',
                onPress: () => {
                    Linking.openSettings();
                }
            },
            {
                text: 'Cancelar',
                style: 'destructive',
            }
        ]
    )
}