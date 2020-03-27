import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import color from '../../../config/constant/color';
import CardInfoGrid from '../../../components/card/CardInfoGrid';
import axios from 'axios';
import api from '../../../config/constant/api';
interface CardStatus {
  value: number;
  detail: string;
}

interface CardIndonesiaState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
  lastUpdate: string;
}

const CardIndonesia = () => {
  const [data, setData] = useState<CardIndonesiaState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.api);
      setData(res.data);
    } catch (e) {
      console.warn('error', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: color.blackLight,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 20,
        }}>
        Indonesia
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {data && (
          <>
            <CardInfoGrid
              color={color.yellow}
              status="Confirmed"
              value={data.confirmed.value}
            />
            <CardInfoGrid
              color={color.teal}
              status="Recovered"
              value={data.recovered.value}
            />
            <CardInfoGrid
              color={color.red}
              status="Death"
              value={data.deaths.value}
            />
          </>
        )}
      </View>
      <Text
        style={{
          marginVertical: 10,
          textAlign: 'right',
          color: color.white,
        }}>
        {data && data.lastUpdate}
      </Text>
      <Button title="Detail" onPress={() => console.log('di klik')} />
    </View>
  );
};

export default CardIndonesia;
