import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform, Text } from 'react-native';
import * as Location from 'expo-location';
import MapView, {Maker} from 'react-native-maps';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const handleNavigate = () => {
    if (!destination || !location) return;

    navigation.navigate('Viagem', {
      destination,        
      origin: location,    
    });
    

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o destino"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Ver rota" onPress={handleNavigate} />
      {location && Platform.OS !== 'web' && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={location} title="Você está aqui" />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
  },
});

