import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import React from "react";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        padding: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    groupInput: {
        marginBottom: 15
    },
    review: {
        marginBottom: 15
    },
    text: {
        fontSize: 25,
        fontWeight: "400"
    },
    input: {
        borderWidth: 1,
        borderColor: 'black'
    }
})
interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
    addNew: any
}
const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props
    const [title, setTitle] = useState("")
    const [star, setStar] = useState("")
    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) +
            min;
    }
    const handleSubmit = () => {
        if (!title || !star) {
            Alert.alert('thiếu thông tin')
            return
        }
        addNew({
            id: randomInteger(1, 2000),
            title,
            star
        })
        setModalVisible(false)
        setStar("")
        setTitle("")
    }
    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={{ fontSize: 20 }}>Create a review</Text>
                        <AntDesign
                            name="close" size={24} color="black"
                            onPress={() => {
                                setModalVisible(false)
                                setTitle("")
                                setStar("")
                            }}
                        />
                    </View>
                    <View style={styles.review}>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung:</Text>
                            <TextInput
                                value={title} style={styles.input}
                                onChangeText={(v) => setTitle(v)}
                            />
                        </View>
                        <View>
                            <Text style={styles.text}>Rating:</Text>
                            <TextInput
                                value={star}
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={(v) => setStar(v)}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button
                            title="add"
                            onPress={() => handleSubmit()}
                        />
                    </View>
                </View>

            </Modal>
        </>
    )
}

export default CreateModal