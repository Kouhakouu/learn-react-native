import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import CreateModal from "./create.modal";
import { AntDesign } from "@expo/vector-icons"
interface IReview {
    id: number;
    title: string;
    star: number
}
const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: "#ccc",
        marginBottom: 15
    }
})
const HomeScreen = (props: any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation()
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'ReactNative', star: 5 },
        { id: 2, title: 'game', star: 5 },
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const addNew = (item: IReview) => {
        setReviews([...reviews, item])
    }
    return (
        <View>
            <Text style={{ fontSize: 30, paddingLeft: 10 }}>
                Review list:
            </Text>
            <AntDesign
                onPress={() => setModalVisible(true)}
                name="plussquareo" size={40} style={{ textAlign: 'center', color: 'orange' }}
            />
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Detail", item)}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                addNew={addNew}
            />
        </View>
    )
}

export default HomeScreen