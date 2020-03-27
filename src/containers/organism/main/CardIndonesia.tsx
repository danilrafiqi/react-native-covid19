import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../config/constant/color';
import CardInfoGrid from '../../../components/card/CardInfoGrid';
import axios from 'axios';
import api from '../../../config/constant/api';
import {useNavigation} from '@react-navigation/native';

interface CardStatus {
  value: number;
  detail: string;
}

interface CardIndonesiaState {
  meninggal: number;
  sembuh: number;
  perawatan: number;
  jumlahKasus: number;
}

const CardIndonesia = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<CardIndonesiaState>();

  const getData = async () => {
    try {
      let res = await axios.get(api.apiIDM);
      setData(res.data);
    } catch (e) {
      console.warn('error', e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            marginLeft: 10,
            color: color.white,
            fontSize: 20,
          }}>
          Indonesia
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('IndonesianCase')}>
          <Text
            style={{
              marginRight: 10,
              color: color.white,
              fontSize: 16,
            }}>
            Detail
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: color.blackLight,
          margin: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          {data && (
            <>
              <View style={{flex: 1}}>
                <CardInfoGrid
                  color={color.yellow}
                  status="Confirmed"
                  value={data.jumlahKasus.toLocaleString()}
                />
                <CardInfoGrid
                  color={color.teal}
                  status="Recovered"
                  value={data.sembuh.toLocaleString()}
                />
              </View>
              <View style={{flex: 1}}>
                <CardInfoGrid
                  color={color.orange}
                  status="Isolated"
                  value={data.perawatan.toLocaleString()}
                />
                <CardInfoGrid
                  color={color.red}
                  status="Death"
                  value={data.meninggal.toLocaleString()}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardIndonesia;
