import {View, Text, Pressable} from "react-native";
import {usePermissionsStore} from "@/presentation/store/usePermissions";

import ThemedPressable from "@/presentation/components/shared/ThemedPressable";

const PermissionsScreen = () => {
    const {locationStatus, requestLocationPermission} = usePermissionsStore();

    return (
        <View style={{marginTop: 50, flex: 1, justifyContent: 'center', alignItems: 'center'}}>


            <ThemedPressable onPress={requestLocationPermission}> Habilitar ubicacion</ThemedPressable>
            <Text>Permissions:{locationStatus}</Text>
        </View>
    )
}
export default PermissionsScreen;

