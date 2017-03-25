import React from 'react';
import { 
    View, 
    Text, 
    Image } 
    from 'react-native';

const search = (props) => {
   const { box, header, btn, space, iconsearch, text } = styles;
   return (
       <View>
            <View style={[space]}></View>
               <View style={[header]}>
                   <View style={[box]}>
                       <Image source={require('../Asset/icon_search.png')}
                           style={[iconsearch]} />
                       <Text style={[text]}>Search</Text>
                   </View>
                   <Image source={require('../Asset/btn_cast.png')}
                           style={[btn]} />
               </View>       
       </View>
   );
};

const styles = {
   space: {
       height: 20,
       backgroundColor: '#6441a5'
   },
   header: {
       backgroundColor: '#6441a5',
       flexDirection: 'row',
       height: 44,
       justifyContent: 'center',
       alignItems: 'center'
   },
   iconsearch: {
       width: 18,
       height: 18,
       margin: 8.7
   },
   btn: {
     width: 35,
     height: 35,
     margin: 4.5
   },
   box: {
       flexDirection: 'row',
       backgroundColor: '#311f53',
       width: 320,
       height: 30,
       borderRadius: 5,
       alignItems: 'center',
       margin: 5,
       padding: 2.3
   },
   text: {
       color: '#b9a3e3',
       textAlign: 'center',
       fontSize: 15
   },
};

export default search;

