import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} 
from 'react-native';

const header = (props) => {
    const { box, head, btn, space } = styles;
    return(
        <View>
            <View style={[space]}></View>
            <View style={[head]}>
                <Image source={require('../Asset/btn_back.png')} style={[btn]} />
                <Text style={[box]}>{props.headerText}</Text>
                <Image source={require('../Asset/btn_like.png')} style={[btn]} />
            </View>
        </View>
    );
};

const styles = {
    space: {
        height: 20,
        backgroundColor: '#6441a5'
    },
    head: {
        backgroundColor: '#6441a5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 33,
        height: 33,
        padding: 12
    },
    box: {
        backgroundColor: '#6441a5',
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        alignItems: 'center',
        width: 292,
        justifyContent: 'center',
        padding: 12
    },
};

export default header;