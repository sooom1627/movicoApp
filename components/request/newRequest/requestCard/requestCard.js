import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar} from 'react-native-elements';
import styles from './requestCardCss';


function RequestCard(props){

    return(
        <View style={styles.container}>  
             <View style={styles.cardContainer}>
                 <Avatar
                    containerStyle={
                        {
                            marginLeft:10,
                            marginRight:10,
                            marginTop:15
                        }
                    }
                    size='medium'
                    rounded
                    source={
                        props.avatar_url
                    }
                 />
                <View style={{flex: 1.5, justifyContent: 'center', flexDirection: 'column'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {props.name}<Text style={{fontSize: 12}}>さん</Text>
                    </Text>
                    <Text style={{color: '#B0B0B0', fontSize: 13}}>
                        {props.date}
                    </Text>
                    <Text style={{color: '#B0B0B0', fontSize: 13}}>
                        {props.subtitle}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#00CEC3', fontSize: 16, fontWeight: 'bold'}}>
                        {props.price}
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={props.navigate}
                >
                    <Image
                        style={{width: 48, height: 48, marginTop: 15, marginRight: 5}}
                        source={require('../../../../assets/app/request/Group105.png')}
                    />
                </TouchableOpacity>
             </View>
        </View> 
    );
}

export default RequestCard;