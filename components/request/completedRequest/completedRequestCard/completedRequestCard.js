import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import styles from '../../mastercss';
import CompletedRequestCard from './CompletedRequestCard/completedRequestCard';

class CompletedRequest extends React.Component{
    render(){

        const list = [
            {
              name: 'りょーた',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              date: '2020年3月14日',
              price: '¥3000',
              subtitle: 'オリジナルメッセージ',
            },
            {
              name: 'けいすけ',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              date: '2020年3月14日',
              price: '¥3000',
              subtitle: '定番メッセージ'
            },
        ]

        return(
            <View style={styles.container}>
                <Image
                    style={{ width: '100%', height: 264}}
                    source={require('../../assets/Group82.png')}
                /> 
                <View style={{width: '100%', backgroundColor: '#F5F5F5', padding: 4}}>
                    <Text style={{fontSize: 14, color: '#939393', paddingTop: 7}}>
                        撮影済みのリクエスト
                    </Text>
                    {list.map((l,i)=>{
                        return(
                            <CompletedRequestCard 
                                key={i}
                                name={l.name}
                                avatar_url={l.avatar_url}
                                date={l.date}
                                price={l.price}
                                subtitle={l.subtitle}
                            />
                        );
                    })}
                    <Button
                         title="Go to InvoiceEdit"
                         onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
            </View>
        );
    }
}
export default CompletedRequest;