import { Button, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import { OPENSANS } from "../../utils/const"
import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import starIcon from "../../assets/images/star.png"
const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSANS
    },
    reviewText: {
        fontSize: 25,
        fontFamily: OPENSANS,
        padding: 15,
        color: 'white'
    }
})
const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    const route: RouteProp<RootStackParamList, "Detail"> = useRoute()
    return (
        <ImageBackground
            source={require("../../assets/images/react-native.png")}
            style={{ flex: 1 }}
        >
            <Text style={styles.reviewText}>Id: {route.params.id}</Text>
            <Text style={styles.reviewText}>Tiêu đề: {route.params.title}</Text>
            <Text style={styles.reviewText}>
                Đánh giá: {route.params.star} sao
            </Text>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
                <Image
                    style={{ height: 50, width: 50 }}
                    source={starIcon}
                />
            </View>
        </ImageBackground>
    )
}

export default DetailScreen