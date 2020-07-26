import React from 'react';
import {View, Text} from 'react-native';

function RequestNumber(props){
    return(
        <View style={{backgroundColor: '#F5F5F5', paddingTop: 11, width: '100%', paddingLeft: 8}}>
            <Text style={{fontSize: 14, color: '#939393', paddingLeft: 4}}>新しいリクエスト({props.number})</Text>
        </View>
    );
}

export default RequestNumber;