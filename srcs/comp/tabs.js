import React from 'react';
import { 
    View, 
    Text, 
    Image } 
    from 'react-native';

const tabs = () => {
   const { line, white, tab, img1, img2, img3, img4,
           text1, text2, text3, text4, container } = styles;
   return (
       <View style={[container]}>
          <View style={[line]}></View>
          <View style={[white]}>
               <View style={[tab]}>
                   <Image source={require('../Asset/btn_games_selected.png')}
                      style={[img1]} />
                   <Text style={[text1]}>Games</Text>
               </View>

               <View style={[tab]}>
                   <Image source={require('../Asset/btn_channels.png')}
                       style={[img2]} />
                   <Text style={[text2]}>Channels</Text>
               </View>

               <View style={[tab]}>
                   <Image source={require('../Asset/btn_following.png')}
                      style={[img3]} />
                   <Text style={[text3]}>Following</Text>
               </View>

               <View style={[tab]}>
                   <Image source={require('../Asset/btn_me.png')}
                      style={[img4]} />
                   <Text style={[text4]}>Me</Text>
               </View>
          </View>
       </View>
   );
};

const styles = {
   container: {
       flex: 1,
       position: 'absolute',
       top: 617.5
   },
   line: {
       backgroundColor: 'rgba(0,0,0,0.2)',
       height:0.5,
       width: 375
   },
   white: {
       backgroundColor: 'white',
       height: 49,
       width: 375,
       flexDirection: 'row'
   },
   tab: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   img1: {
       top: 7,
       width: 50,
       height: 50,
   },
   img2: {
       top:7,
       width: 50,
       height: 50,
   },
   img3: {
       top:7,
       width: 50,
       height: 50,
   },
   img4: {
       top:7,
       width: 50,
       height: 50,
   },
   text1: {
       fontSize: 10,
       color: '#6441a5',
       top:-10
   },
   text2: {
       fontSize: 10,
       color: '#bbbbbb',
       top:-10
   },
   text3: {
       fontSize: 10,
       color: '#bbbbbb',
       top:-10
   },
   text4: {
       fontSize: 10,
       color: '#bbbbbb',
       top:-10
   }
};

export default tabs;