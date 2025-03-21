import {View, Text} from "react-native";
import {usePermissionsStore} from "@/presentation/store/usePermissions";

const MapScreen = () => {
    const {locationStatus} = usePermissionsStore();
    return (
        <View style={{marginTop: 50}}>
            <Text>Map: {locationStatus}</Text>
        </View>
    )
}
export default MapScreen;