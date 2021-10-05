import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, SafeAreaView} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/About';
import MenuItem from '../components/MenuItem';


const RestaurantDetails = ({route}) => {
    
    return (
        <View style={{height: '100%'}}>
            <About route={route}/>
            <Divider width={1.8} />
            <MenuItem/>            
        </View>
    );
}



const styles = StyleSheet.create({})

export default RestaurantDetails;
