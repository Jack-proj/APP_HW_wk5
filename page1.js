import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar
} 
from 'react-native';

const page1 = () => {
    const { bc, logo } = styles;
    return(
        <View style={[bc]}>
            <StatusBar hidden={true} />
            <Image source={require('./srcs/Asset/logo_twitch.png')}
                    style={[logo]} />
        </View>
    );
};

const styles = {
    bc: {
        backgroundColor: '#6441a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 185.5,
        height: 61.5
    }
};

export default page1;