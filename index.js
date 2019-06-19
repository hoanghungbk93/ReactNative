/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Btn from './compoment/btn'
//import Btn from './compoment/Keyboard'
AppRegistry.registerComponent(appName, () => Btn);
