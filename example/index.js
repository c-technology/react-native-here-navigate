import { YOUR_ACCESS_KEY_ID, YOUR_ACCESS_KEY_SECRET } from '@env';
import { AppRegistry } from 'react-native';
import { HEREConfig } from 'react-native-here-explore';
import { name as appName } from './app.json';
import App from './src/App';

HEREConfig.initializeHereSDK(
  YOUR_ACCESS_KEY_ID || 'YOUR_ACCESS_KEY_ID',
  YOUR_ACCESS_KEY_SECRET || 'YOUR_ACCESS_KEY_SECRET'
);

AppRegistry.registerComponent(appName, () => App);
