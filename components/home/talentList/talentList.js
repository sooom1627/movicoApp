import React, {useState, useEffect} from "react";
import { View, Text,FlatList } from "react-native";
import TalentListCard from "./talentListCard/talentListCard";


export default function TalentList(){
  const [talents, setTalents] = useState([])

  useEffect(()=>{
    fetch(
      'https://movie-co.com/api/talents/',{
        method:'GET',}
    ).then(res => res.json()).then(jsonRes => setTalents(jsonRes))
    .catch( error =>  console.log(error)  )
  })

  return (
    <View style={{ marginTop: 28, flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 13,
          marginLeft: 8,
        }}
      >
        おすすめ
      </Text>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          paddingLeft: 8,
          paddingRight: 8,
        }}
      >
        {
        talents.map(talent => {
          return (
              <TalentListCard key={talent.id} name={talent.name} profile_pic={talent.profile_pic}/>
            )
      })
      }
      </View>
    </View>
  );
}


