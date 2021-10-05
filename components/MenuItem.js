import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, ScrollViewComponent, TouchableOpacity} from 'react-native';
import FoodImage from './FoodImage';
import FoodInfo from './FoodInfo';


const MenuItem = () => {
    const foods = [
        {
            title: 'Lasagna',
            description: 'Excellent and Authentic recipe! A little more work and ingredients, but well worth it.',
            image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
            price: 12
        },
        {
            title: 'Sausage',
            description: 'Excellent and Authentic recipe! A little more work and ingredients, but well worth it.',
            image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            price: 11
        },
        {
            title: 'Mozzarella',
            description: 'Excellent and Authentic recipe! A little more work and ingredients, but well worth it.',
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            price: 15
        },
        ,
        {
            title: 'Scalop',
            description: 'Excellent and Authentic recipe! A little more work and ingredients, but well worth it.',
            image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            price: 11
        },
        ,
        {
            title: 'Party',
            description: 'Excellent and Authentic recipe! A little more work and ingredients, but well worth it.',
            image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            price: 11
        },
    ]
    
    return (
        <ScrollView>
            {foods.map((food, i) => (
                <TouchableOpacity key={i}>
                <View style={styles.menuItem}>
                    <FoodInfo food={food} />
                    <FoodImage image={food.image}/>
                </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    menuItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    }
});

export default MenuItem;
