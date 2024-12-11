import type { ScreenNames, ScreenProps } from '@/navigation';
import Geolocation, {
  type GeolocationResponse,
} from '@react-native-community/geolocation';
import React, { useEffect } from 'react';
import { Button, PermissionsAndroid, StyleSheet, View } from 'react-native';
import type { GeoCoordinates } from 'react-native-here-explore';
import { VisualNavigator } from 'react-native-here-explore';

export const NavigationScreenName: ScreenNames = 'Navigation';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'Access to location required for routing.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export default function NavigationScreen(_: ScreenProps<'Navigation'>) {
  const [currentLocation, setCurrentLocation] = React.useState<
    GeoCoordinates | undefined
  >(undefined);
  const [destination, setDestination] = React.useState<
    GeoCoordinates | undefined
  >(undefined);
  const [waypoints, setWaypoints] = React.useState<GeoCoordinates[]>([]);

  useEffect(() => {
    if (currentLocation && destination) {
      setWaypoints([currentLocation, destination]);
    }
  }, [destination]);

  useEffect(() => {
    const watch = Geolocation.watchPosition((position: GeolocationResponse) => {
      setCurrentLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      destination === undefined &&
        setDestination({
          latitude: position.coords.latitude + 0.03,
          longitude: position.coords.longitude + 0.03,
        });
      console.log('Current location:', position);
    });
    return () => {
      Geolocation.clearWatch(watch);
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <VisualNavigator
        testID="map"
        style={styles.box}
        location={
          currentLocation ?? { latitude: 52.51967475, longitude: 13.36895715 }
        }
        waypoints={waypoints}
      />
      <Button
        title="Request location permission"
        onPress={() => requestLocationPermission()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { margin: -4 },
  addWaypoints: {
    position: 'absolute',
    top: 100,
    start: 0,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginStart: 16,
  },
  bottomSheet: {
    backgroundColor: '#292F3A',
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
  },
  title: {
    marginHorizontal: 16,
    marginVertical: 16,
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
  scrollView: {
    width: '100%',
    alignContent: 'center',
    marginBottom: 16,
  },
  pin_container: {
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  pin_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  pin_arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [{ rotate: '180deg' }],
    top: -1,
  },
});
