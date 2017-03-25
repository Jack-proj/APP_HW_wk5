import React from 'react';
import { 
    View, 
    Text } 
    from 'react-native';

const chose = () => {
   const { options, box, leftbox, rightbox, line } = styles;
   return (
           <View style={[options]}>
               <View style={[box]}>
                   <Text style={[leftbox]}>LIVE</Text>
                   <View style={[line]}></View>
               </View>
               <Text style={[rightbox]}>RECENT</Text>
           </View>
   );
};

const styles = {
   container: {
       flex: 1
   },
   options: {
       flexDirection: 'row',
       height: 44,
       alignItems: 'center'
   },
   box: {
       flex: 1
   },
   leftbox: {
       textAlign: 'center',
       fontSize: 13,
       color: '#6441a5'
   },
   line: {
       top: 8.5,
       height: 5,
       backgroundColor: '#6441a5'
   },
   rightbox: {
       flex: 1,
       textAlign: 'center',
       fontSize: 13,
       color: '#bbbbbb'
   }
};

export default chose;