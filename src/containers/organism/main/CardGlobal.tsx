import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import color from '../../../config/constant/color';
import CardInfo from '../../../components/card/CardInfo';
import axios from 'axios';
import api from '../../../config/constant/api';

interface CardStatus {
  value: number;
  detail: string;
}

interface CardGlobalState {
  confirmed: CardStatus;
  recovered: CardStatus;
  deaths: CardStatus;
}

const CardGlobal = () => {
  const [data, setData] = useState<CardGlobalState>();

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
      {data && (
        <>
          <CardInfo
            color="yellow"
            status="Confirmed"
            value={data.confirmed.value}
          />
          <CardInfo
            color="green"
            status="Recovered"
            value={data.recovered.value}
          />
          <CardInfo color="red" status="Death" value={data.deaths.value} />
        </>
      )}
    </View>
  );
};

export default CardGlobal;
