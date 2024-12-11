import { Button, StyleSheet, View } from 'react-native';

import { PolylineScreenName, RoutesScreenName } from '@/features';
import type { ScreenNames, ScreenProps } from '@/navigation';
import { NavigationScreenName } from '../navigation/NavigationScreen';

export const HomeScreenName: ScreenNames = 'Home';

export default function HomeScreen({ navigation }: ScreenProps<'Home'>) {
  return (
    <View style={[styles.container]}>
      <Button
        title="Routes screen"
        onPress={() => navigation.navigate(RoutesScreenName)}
      />
      <View style={styles.margin} />
      <Button
        title="Polyline screen"
        onPress={() => navigation.navigate(PolylineScreenName)}
      />
      <View style={styles.margin} />
      <Button
        title="Navigation screen"
        onPress={() => navigation.navigate(NavigationScreenName)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  margin: { marginVertical: 4 },
});
