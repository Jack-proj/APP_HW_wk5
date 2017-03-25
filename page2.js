import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StatusBar } 
    from 'react-native';
import Header from './srcs/comp/header';
import Chose from './srcs/comp/chose';
import Tabs from './srcs/comp/tabs';


const page2 = () => {

   const { container, img, imghalf, box } = styles;
   return (
       <View style={[container]}>
           <StatusBar barStyle='light-content' />
           <Header headerText={'Hearthstone'} />
           <Chose />
               <View style={[box]}>
                   <Image source={require('./srcs/Asset/img_firebat.png')}
                       style={[img]} />

                   <Image source={require('./srcs/Asset/img_forsen.png')}
                       style={[img]} />

                   <Image source={require('./srcs/Asset/img_kolento.png')}
                       style={[imghalf]} />
               </View>
           <Tabs />
       </View>
   );
};

const styles = {
   container: {
       flex: 1
   },
   box: {
       alignItems: 'center',
       backgroundColor: '#f1f1f1'
   },
   img: {
       height: 200,
       width: 365,
       margin: 2.5
   },
   imghalf: {
       height: 144,
       width: 365,
       margin: 2.5
   },
};

export default page2;

