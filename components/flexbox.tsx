import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 10,
        borderColor: "black",
        flex: 1
    },
    item1: {
        backgroundColor: "violet",
        padding: 20,
        width: 100,
        height: 200,
        flex: 1
    },
    item2: {
        backgroundColor: "green",
        padding: 20,
        width: 50,
        height: 150
    },
    item3: {
        backgroundColor: "red",
        padding: 20,
        width: 50,
        height: 100
    },
    item4: {
        backgroundColor: "yellow",
        padding: 20,
        width: 100,
        height: 50
    },
})

const Flexbox = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.item1}>
                    <Text>
                        flexbox1
                    </Text>
                </View>
                <View style={styles.item2}>
                    <Text>
                        flexbox2
                    </Text>
                </View>
                <View style={styles.item3}>
                    <Text>
                        flexbox3
                    </Text>
                </View>
                <View style={styles.item4}>
                    <Text>
                        flexbox4
                    </Text>
                </View>
            </View>
        </View>
    )
}
export default Flexbox