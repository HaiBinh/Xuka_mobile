import FirstScreen from '../tab/FirstScreen';
import SecondScreen from '../tab/SecondScreen.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//
const MainScreenNavigator = createStackNavigator({
    Login: FirstScreen,
    Details: SecondScreen,

},
    {
        initialRouteName: 'Home',
    });

export const AppNavigator = createAppContainer(MainScreenNavigator)