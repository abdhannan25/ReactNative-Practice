import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import { useState, useEffect } from "react";
import React from 'react'

export default function Products(props) {
   const [settings, setSettings] = useState([global.setting]);

    const filters = [
        {
            key: 0,
            title: 'Gender'
        },
        {
            key: 1,
            title: 'Product Type'
        },
        {
            key: 2,
            title: 'Color'
        },
        {
            key: 3,
            title: 'Price'
        },
        {
            key: 4,
            title: 'Shipping'
        },
        {
            key: 5,
            title: 'Rating'
        },
    ];
    
    const appliedFilters =[
        {
            key: 0,
            title: 'Gender',
            value: 'Male'
        },
        {
            key: 1,
            title: 'Product Type',
            value: 'Shirt'
        },
        {
            key: 2,
            title: 'Color',
            value: 'Blue'
        },
        {
            key: 3,
            title: 'Shipping',
            value: 0
        },
    
    ];
    
    const products =[
        {
            key: 0,
            name: 'Black Polo',
            price: 1200,
            shipping: 0,
            rating: '4.6/5',
            imgPath: require("./assets/linkedin.jpeg"),

        },
        {
            key: 1,
            name: 'Red Polo',
            price: 1200,
            shipping: 0,
            rating: '4.4/5',
            imgPath: require("./assets/icon.png"),

        },
        {
            key: 2,
            name: 'Denim Jacket',
            price: 3500,
            shipping: 200,
            rating: '4.7/5',
            imgPath: require("./assets/icon.png"),

        },
        {
            key: 3,
            name: 'Leather Jacket',
            price: 4000,
            shipping: 200,
            rating: '4.3/5',
            imgPath: require("./assets/icon.png"),

        },
        {
            key: 4,
            name: 'Blue Casual Shirt',
            price: 1500,
            shipping: 0,
            rating: '4.5/5',
            imgPath: require("./assets/icon.png"),

        },
        {
            key: 5,
            name: 'Black Jeans',
            price: 2000,
            shipping: 100,
            rating: '4.2/5',
            imgPath: require("./assets/icon.png"),

        },
        {
            key: 6,
            name: 'Trousers',
            price: 1000,
            shipping: 0,
            rating: '4.9/5',
            imgPath: require("./assets/icon.png"),

        },
    ];
    useEffect(() => {
        console.log("Back to products.js")
        const unsubscribe = props.navigation.addListener("focus", () => {
            setSettings(global.setting);
        });
        return unsubscribe;
    }, [props.navigation]);

    
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Text style={styles.furor}>FUROR</Text>
      </View>

      <View style={{flex:0.85}}>
        <View style={{flex:1}}>
            <View style={{flex:0.1}}>
                <FlatList
                    data={filters}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.filters
                        }>
                            <Text style={styles.filterTitle}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>

            <View style={{flex:0.1}}>
                <View style={styles.filterbox}>
                    <FlatList
                            data={appliedFilters}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.appfilters}>
                                    <Text style={styles.appfilterValues}>{item.title} : {item.value}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.key}
                        />
                </View>
            </View>

            <View style={{flex:0.8}}>
                <FlatList
                    data={products}
                    renderItem={({item}) => (
                        <View style={styles.flatlistView}>
                            <View style={styles.imageView}>
                                <Image style={styles.img} source={item.imgPath}/>
                            </View>
                            <View style={styles.descView}>
                                <Text style={styles.prodTitle}>{item.name}</Text>
                                <Text style={styles.proddetails}>
                                    <Text style={{fontWeight: 'bold'}}>Rating: </Text><Text>{item.rating}</Text>
                                </Text>
                                <Text style={styles.proddetails}>
                                    <Text style={{fontWeight: 'bold'}}>Shipping: </Text><Text>{item.shipping}</Text>
                                </Text>
                                <Text style={styles.prodPrice}>Rs.{item.price}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
      </View>

      <View style={styles.set(settings)}>
        <TouchableOpacity 
            style={styles.settingButton}
            onPress={() => {props.navigation.navigate("Settings");}}>
            <Text style={{color:'black'}}>Go to Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.chatButton}
            onPress={() => {props.navigation.navigate("Chat");}}>
            <Text style={{color:'black'}}>Go to Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        flex:0.1,
        borderColor: 'black',
        borderWidth: 1, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey'
    },
    furor: {
        fontSize:40,
        color: 'black',
        fontWeight: 'bold',        
    },
    filters:{
        marginTop: 10,
        backgroundColor: 'black',
        marginEnd:5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 10,
        marginStart: 5,        
    },
    filterTitle:{
        color: 'white',
    },
    filterbox:{
        borderColor: 'black',
        borderWidth: 1, 
        width: '100%',
        height: 45,
        marginTop: 10,
        paddingBottom:10,
    },
    appfilters:{
        marginTop: 10,
        backgroundColor: 'green',
        marginEnd:5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 10,
        marginStart: 5,
    },
    appfilterValues:{
        color: 'white',
    },
    set: (settings) => ({
        flex:0.05,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1, 
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: settings.themeColor,
    }),
    settingButton:{
       
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginEnd: 10,
        marginStart: -20,
    },
    chatButton:{
       
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginStart: 40,
    },
    flatlistView:{
        flex: 1,
        flexDirection: 'row',
        border:0.2
    },
    imageView:{
        flex: 0.3,
        borderColor: 'black',
        borderWidth: 0.3,


    },
    descView:{
        flex: 0.7,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        borderColor: 'black',
        borderWidth: 0.3, 
    },
    prodTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    prodPrice:{
        color: 'red',
        fontSize: 16,
        marginTop:5,
    },
    proddetails:{
        fontSize: 13,
    },
    img:{
        borderRadius: 0,
        height: 100,
        width: 105,
    }
})

