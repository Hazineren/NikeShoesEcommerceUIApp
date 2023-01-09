import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import Modal from 'react-native-modal'
import { images, icons, FONTS, SIZES, COLORS } from '../../constants'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Svg, Polygon } from 'react-native-svg'
import { Shadow } from 'react-native-shadow-2'
import { recentlyViewedLabel } from '../../constants/images'
import { BlurView } from '@react-native-community/blur'

const Home = () => {

    const [infoModalVisibilty, setInfoModalVisibilty] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null)

    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ])
    const [recentlyViewed, setRecentlyViewed] = React.useState([
        {
            id: 0,
            name: "Nike Metcon 4",
            img: images.nikeMetcon4,
            bgColor: "#414045",
            type: "TRAINING",
            price: "$119",
            sizes: [6, 7, 8]
        },
        {
            id: 1,
            name: "Nike Metcon 6",
            img: images.nikeMetcon6,
            bgColor: "#4EABA6",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11]
        },
        {
            id: 2,
            name: "Nike Metcon 5",
            img: images.nikeMetcon5Purple,
            bgColor: "#2B4660",
            type: "TRAINING",
            price: "$124",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Nike Metcon 3",
            img: images.nikeMetcon3,
            bgColor: "#A69285",
            type: "TRAINING",
            price: "$99",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13]
        },
        {
            id: 4,
            name: "Nike Metcon Free",
            img: images.nikeMetconFree,
            bgColor: "#A02E41",
            type: "TRAINING",
            price: "$108",
            sizes: [6, 7, 8, 9, 10, 11]
        },
    ]);

    function renderTrendingShoes(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: SIZES.padding }
        }

        return (
            <TouchableWithoutFeedback style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: SIZES.base, ...trendingStyle }}
                onPress={() => showModal(item)}>
                <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
                <View style={[{
                    flex: 1, justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    paddingLeft: SIZES.radius,
                    borderRadius: 10,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    marginRight: SIZES.padding,
                    backgroundColor: item.bgColor
                }, styles.trendingShadow]}>
                    <View style={{ height: '35%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                    </View>
                </View>
                <View style={{ position: 'absolute', top: 27, right: 0, width: '95%', height: '100%' }}>
                    <Svg height='100%' width='100%'>
                        <Polygon points='0,0 160,0 160,80' fill='white'></Polygon>
                    </Svg>
                </View>
                <Image source={item.img} resizeMode='cover' style={{
                    position: 'absolute',
                    top: 50,
                    right: 0,
                    width: '98%',
                    height: 80,
                    transform: [
                        { rotate: '-15deg' }
                    ]
                }}></Image>
            </TouchableWithoutFeedback>
        )
    }

    const handleVisibleModal = () => {
        console.log('tıklaniiii')
        setSelectedItem(null);
        setInfoModalVisibilty(false);
    }

    const showModal = (i) => {
        console.log('show a tıklandı')
        setSelectedItem(i)
        setInfoModalVisibilty(true)
    }

    function renderShoeSizes(){
        return(
            selectedItem.sizes.map((item)=>{
                return(
                    <TouchableOpacity>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    function renderRecentlyViewed(item, index) {
        return (
            <TouchableWithoutFeedback style={{
                flexDirection: 'row'
            }} onPress={() => { console.log('renderRecently') }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.img} resizeMode='contain' style={{
                        width: 130,
                        height: 100
                    }}></Image>
                </View>
                <View style={{ marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ color: 'black' }}>{item.name}</Text>
                    <Text style={{ color: 'black' }}>{item.price}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, ...FONTS.largeTitleBold, color: 'black' }}>TRENDING</Text>
            <View style={{ height: 260, marginTop: SIZES.radius }}>
                <FlatList data={trending} horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()} renderItem={({ item, index }) => renderTrendingShoes(item, index)}></FlatList>
            </View>

            <View style={[{
                height: '100%', flexDirection: 'row', marginTop: SIZES.padding, borderTopLeftRadius: 30,
                borderTopRightRadius: 30, borderWidth: 1, borderColor: 'gray',
                backgroundColor: 'white'
            }, styles.recentContainerShadow]}>
                <View style={{ width: 70, marginLeft: SIZES.base }}>
                    <Image source={images.recentlyViewedLabel} resizeMode='contain' style={{
                        width: 50,
                        height: 350
                    }}></Image>
                </View>
                <View style={{ paddingBottom: 670 }}>
                    <FlatList showsVerticalScrollIndicator={false} data={recentlyViewed} keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}></FlatList>
                </View>
            </View>

            {/* Modal */}
            {selectedItem &&
                <Modal animationIn='slideInLeft' isVisible={infoModalVisibilty} onBackButtonPress={handleVisibleModal} onBackdropPress={handleVisibleModal}>

                    <BlurView blurType='dark'
                        overlayColor={'rgba(0, 0, 0, .8)'} style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        
                        <View style={{ justifyContent: 'center', backgroundColor: selectedItem.bgColor ,width:'85%'}}>
                            <Text style={{ marginTop: SIZES.base / 2, padding: 5,paddingTop:80, marginHorizontal: 5, color: 'white', ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: 10, color: 'white', ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: 10, color: 'white', ...FONTS.h1, fontWeight: '700' }}>{selectedItem.price}</Text>
                            <View>
                            <Text style={{ color: 'white', ...FONTS.body3 }}>Select Size </Text>
                            </View>
                            <View>
                                {renderShoeSizes}
                            </View>
                            

                            <TouchableOpacity style={{ marginTop: 10, width: '100%', height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                                onPress={handleVisibleModal}>
                                <Text style={{ color: 'white', ...FONTS.largeTitleBold }}>Add To Bag</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={selectedItem.img}
                            resizeMode='contain'
                            style={{ width: '80%', bottom:190, position: 'absolute', height: 200, transform: [{ rotate: '-15deg' }] ,marginBottom:10}}></Image>
                    </BlurView>
                </Modal>

            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        felx: 1,
        backgroundColor: COLORS.white,
    },
    trendingShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23
    },
    recentContainerShadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 11
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23
    },
    absolute: {

        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'black'
    }
})

export default Home