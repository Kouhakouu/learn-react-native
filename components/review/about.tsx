import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const"

const styles = StyleSheet.create({
    about: {
        fontSize: 30,
        padding: 15
    }
})
const AboutScreen = () => {
    return (
        <View>
            <Text style={[styles.about, globalStyles.appFont]}>
                about review app
            </Text>
        </View>
    )
}
export default AboutScreen