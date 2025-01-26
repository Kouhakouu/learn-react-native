import { StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from "@react-navigation/native"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor: '#ccc',
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 15
    },
    headerText: {
        marginLeft: 0,
        flex: 1,
        textAlign: 'center',
        fontSize: 25
    }
})
const AppHeader = () => {
    const navigation: any = useNavigation()
    return (
        <View style={styles.container}>
            <MaterialIcons
                name='menu' size={24} color='black'
                onPress={() => { navigation.openDrawer() }}
            />
            <Text style={styles.headerText}>helllo</Text>
        </View>
    )
}

export default AppHeader