import React, { useState } from 'react'
import { Dimensions, FlatList, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { food } from '../../../datas/food';
import CustomHeader from '../../../component/customHeader';
import { FoodItem } from '../../../model/food';
import { scale } from 'react-native-size-matters';



const FoodScreen = () => {

    const [filterData, setFilterData] = useState<FoodItem[]>([]);
    const { width, height } = Dimensions.get("window")

    const onChangeText = (value: string) => {
        const filterDatas = food.filter(item => item?.foodName.toLowerCase().includes(value.toLowerCase()))
        if (filterDatas) {
            setFilterData(filterDatas)
        }
    }


    return (
        <View style={styles.container}>

            <CustomHeader />

            <View style={styles.searchInputBox}>
                <TextInput
                    style={styles.searchInput}
                    placeholder='search...'
                    placeholderTextColor='gray'
                    onChangeText={(value: string) => onChangeText(value)}
                />
                <View style={styles.searchIconBox}>
                    <Fontisto name="search" size={scale(25)} color="#fff" />
                </View>
            </View>

            <FlatList
                data={filterData}
                renderItem={({ item, index }) => (
                    <Pressable
                        key={index}
                        style={styles.foodBtnBox}
                    >
                        <View style={styles.foodLeftBox}>
                            <View style={styles.titleBox}>
                                <Text
                                    numberOfLines={2}
                                    style={styles.foodNameText}
                                >{item.foodName}</Text>
                            </View>
                            <View style={styles.subTextBox}>
                                <Text style={styles.calText}>{item.energy?.value} cals</Text>
                                <Text style={styles.measureText}> / {item.measure}</Text>
                            </View>
                        </View>
                        <View style={styles.foodRightBox}>
                            <Pressable
                                style={({ pressed }) => [
                                    {
                                        backgroundColor: pressed ? 'rgba(255,255,255,0.5)' : 'black'
                                    },
                                    styles.checkBox
                                ]}
                            >
                                {
                                    false &&
                                    <Ionicons name="checkmark-outline" size={24} color="#fff" />
                                }
                            </Pressable>
                        </View>
                    </Pressable>
                )}
                style={styles.flatlistContainer}
                showsVerticalScrollIndicator={false}
                snapToInterval={height * 0.085}
            />

        </View>
    )
}

export default FoodScreen
