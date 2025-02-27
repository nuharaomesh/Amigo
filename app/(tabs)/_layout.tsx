import React, {useState} from "react";
import {Appbar, Avatar, BottomNavigation, Drawer} from "react-native-paper";
import {StyleSheet, View, Text} from "react-native";
import Dashboard from ".";
import Event from "./event";
import Finance from "./finance";
import Fitness from "./fitness";
import { DarkTheme } from "@react-navigation/native";
import style from "../styles";

export default function BottomTabs() {              
     
    const [active, setActive] = React.useState('');
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: "home"},
        { key: 'event', title: 'Events', focusedIcon: "calendar"},
        { key: 'finance', title: 'Finance', focusedIcon: "finance"},
        { key: 'fitness', title: 'Fitness', focusedIcon: "weight-lifter"},
    ])
    const renderScene = BottomNavigation.SceneMap({
        home: Dashboard,
        event: Event,
        finance: Finance,
        fitness: Fitness
    })

    return (
        
        <View style={style.container}>
            <Appbar.Header style={style.header}>
                <Avatar.Image size={38} source={require('../../assets/profile2.jpeg')} />
            </Appbar.Header>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                theme={DarkTheme}
                labeled={true}
                shifting={false}
                barStyle={style.bottomBar}
                activeIndicatorStyle={{display: "none"}}
                activeColor="white"
                inactiveColor="#656565"
            />
        </View>
    )
}