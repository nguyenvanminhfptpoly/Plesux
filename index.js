/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
import Splash from './src/components/Splash';
import { buildTheme } from './themes'
buildTheme();
AppRegistry.registerComponent(appName, () => App);
