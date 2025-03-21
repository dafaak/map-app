import {Pressable, PressableProps, StyleSheet, Text} from "react-native";

interface Props extends PressableProps {
    children: string
}

const ThemedPressable = ({onPress, children, ...rest}: Props) => {
    return (<Pressable {...rest} style={style.btnPrimary} onPress={onPress}>
        <Text style={style.textPrimary}>{children}</Text>
    </Pressable>)
};
export default ThemedPressable;

const style = StyleSheet.create({
    btnPrimary: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
    },
    textPrimary: {
        color: 'white',
    }
})