import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

const RootNavigation = () => {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false
	}
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({})

export default RootNavigation;
