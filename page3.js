import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar } 
    from 'react-native';
import Search from './srcs/comp/search';
import Chose from './srcs/comp/chose';
import Tabs from './srcs/comp/tabs';

const page3 = () => {
   const { container, img, box, row1, row2 } = styles;
   return (
       <View style={[container]}>
           <StatusBar barStyle='light-content' />
           <Search />
           <View style={[box]}>
               <View style={[row2]}>
                   <Image source={require('./srcs/Asset/img_leagueoflegends.png')}
                           style={[img]} />

                   <Image source={require('./srcs/Asset/img_counterstrike.png')}
                           style={[img]} />
               </View>
               <View style={[row1]}>
                   <Image source={require('./srcs/Asset/img_hearthstone.png')}
                           style={[img]} />

                   <Image source={require('./srcs/Asset/img_dota2.png')}
                           style={[img]} />
               </View>

               <View style={[row1]}>
                   <Image source={require('./srcs/Asset/img_h1z1.png')}
                           style={[img]} />

                   <Image source={require('./srcs/Asset/img_destiny.png')}
                           style={[img]} />
               </View>
           </View>
       <Tabs />
       </View>
   );
};

const styles = {
   container: {
       flex: 1,
       position: 'relative'
   },
   box: {
       alignItems: 'center',
       backgroundColor: '#f1f1f1'
   },
   row1: {
       flexDirection: 'row'
   },
   row2: {
       flexDirection: 'row',
       marginTop: 2.5
   },
   img: {
       height: 180,
       width: 180,
       margin: 2.5
   }
};
export default page3;

