import {View, Text} from "react-native";
import {usePermissionsStore} from "@/presentation/store/usePermissions";
import MapView from "react-native-maps";

const MapScreen = () => {
    const {locationStatus} = usePermissionsStore();
    return (
        <View style={{ flex: 1}}>
            <MapView  initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={{width: '100%', height: '100%'}}></MapView>
        </View>
    )
}
export default MapScreen;