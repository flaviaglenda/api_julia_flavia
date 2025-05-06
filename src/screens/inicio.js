import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Stylesheet } from 'react-native-web';
import * as Location from 'expo-location';
import MapView, {Maker} from 'react-native-maps';

export default function HomeScreen({navigation}) {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    (async () => {
      const {status} = await Location.requestBackgroundPermissionsAsync();
      if (status != 'granted') return;
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const hanldeNavigate = () => {
    if (!destination || !location) return;
    navigation.navigate('Route', {destination, origin: location});
  };
}
