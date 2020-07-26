import React from 'react';
import {Text, View, Image} from 'react-native';

function NewRequestHeader(props){
    return (
        <View>
           <Image
            style={{ width: '100%', height: 264, position: 'relative' }}
            source={require('../../../../assets/app/request/Group82.png')}
           />
           <Text style={{color: '#00CEC3', fontSize: 13, fontWeight: '600', position: 'absolute', left: '35%', top: '25%' }}>
               新しいリクエストが{"\n"}{props.requestCase}件あるよん
           </Text>
        </View>
    );
}

export default NewRequestHeader;