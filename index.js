import React from 'react' ;
 import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {configureAxios} from './App/utils/helperFunctions';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import Store from './App/redux/Store'


const connectedApp = ()=> 
<Provider store={Store}> 
    <App   />

</Provider>
    


AppRegistry.registerComponent(appName, () => connectedApp);


configureAxios() ;